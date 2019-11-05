import { GetterTree } from 'vuex';
import {
  ICity, ICityCardInSegment, ICityForecast, IPeriod, ISegment,
} from '@/store/external-types';
import { RootState } from '@/store/types';
import { PeriodsState } from './types';

interface Getters extends GetterTree<PeriodsState, RootState> {
  periods: (s: PeriodsState, _: any, __: any, rg: GetterTree<RootState, RootState>) => IPeriod[];
  model: (s: PeriodsState, _: any, __: any, rg: GetterTree<RootState, RootState>)
    => ISegment[] | null;
  forecast: (s: PeriodsState, g: any, __: any, rg: GetterTree<RootState, RootState>)
    => ICityForecast[] | null;
}

const binomialCoefficient = (n: number, k: number) => {
  // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-20.php
  let coefficient = 1;
  for (let x = n - k + 1; x <= n; x += 1) coefficient *= x;
  for (let x = 1; x <= k; x += 1) coefficient /= x;
  return coefficient;
};

const chanceOfAtLeastOneOfXInYWithZ = (x: number, y: number, z: number) => {
  const hotCards = x;
  const totalCards = y;
  const drawnCards = z;
  const coldCards = totalCards - hotCards;

  console.log(`Odds of pulling at least 1 of ${hotCards} out of ${totalCards} with ${drawnCards} pulls`); // debug
  if (hotCards === 0 || drawnCards === 0) return 0;

  let form = '| ('; // debug
  let chance = 0;
  let hotCardsDrawn = Math.min(hotCards, drawnCards);
  while (hotCardsDrawn > 0) {
    const coldCardsDrawn = drawnCards - hotCardsDrawn;
    console.log(`| hotCardsDrawn: ${hotCardsDrawn}; coldCardsDrawn: ${coldCardsDrawn};`); // debug
    chance += (binomialCoefficient(hotCards, hotCardsDrawn)
      * binomialCoefficient(coldCards, coldCardsDrawn));
    form += `bc(${hotCards} ${hotCardsDrawn})*bc(${coldCards} ${coldCardsDrawn}) + `; // debug
    hotCardsDrawn -= 1;
  }
  chance /= binomialCoefficient(totalCards, drawnCards);
  form += `) / bc(${totalCards} ${drawnCards}) = ${chance}`; // debug
  console.log(form); // debug
  console.log('|'); // debug
  return chance;
};

const appearancesOfCityInSegment = (city: ICity, segment: ISegment) => {
  let appearances = 0;
  segment.cards.forEach((card: ICityCardInSegment) => {
    if (card.cityId === city.id) appearances += 1;
  });
  return appearances;
};

const chanceOfFindingCityInSegment = (city: ICity, segment: ISegment, drawnCards: number) => {
  const cardsInSegment = segment.cards.length;
  const hotCards = appearancesOfCityInSegment(city, segment);
  return chanceOfAtLeastOneOfXInYWithZ(hotCards, cardsInSegment, drawnCards);
};

const getters: Getters = {

  periods(state: PeriodsState, _: any, __: any, rootGetters: any): IPeriod[] {
    return state.periods.map((cityIds, periodId) => ({
      id: periodId,
      cards: cityIds.map((cityId, position) => {
        const city = rootGetters.cityFromId(cityId);
        return {
          cityId,
          name: city.name,
          periodId,
          position,
        };
      }),
      current: periodId === state.periods.length - 1,
    }));
  },

  model(state: PeriodsState, _: any, __: any, rootGetters: any): ISegment[] | null {
    // set up
    const deck: number[] = [...rootGetters.deckAsCardIds];
    if (deck.length === 0) {
      if (state.periods.length === 0
        || (state.periods.length === 1 && state.periods[0].length === 0)) return [];
      return null;
    }
    const model: number[][] = [deck];

    // carry out the record
    try {
      state.periods.forEach((period) => {
        const discard: number[] = [];
        period.forEach((card) => {
          const lastSegment = model[model.length - 1];
          const index = lastSegment.indexOf(card);
          if (index >= 0) {
            lastSegment.splice(index, 1);
            if (lastSegment.length === 0) model.pop();
          } else {
            const firstSegment = model[0];
            const idx = firstSegment.indexOf(card);
            if (idx >= 0) {
              firstSegment.splice(idx, 1);
              if (firstSegment.length === 0) model.splice(0, 1);
            } else {
              throw Error(`Couldn't find card with cityId ${card} in first segment`);
            }
          }
          discard.push(card);
        });
        model.push(discard);
      });
    } catch (e) {
      return null;
    }

    // format for presentation
    return model.map((segment, segmentId) => ({
      id: segmentId,
      cards: segment.map((cityId, position) => {
        const city = rootGetters.cityFromId(cityId);
        return {
          segmentId,
          cityId,
          name: city.name,
          position,
        };
      }).sort((a, b) => (a.name <= b.name ? -1 : 1)),
      current: segmentId !== 0 && segmentId === model.length - 1,
    })).reverse();
  },

  forecast(_: any, periodsGetters: any, __: any, rootGetters: any): ICityForecast[] | null {
    const cities = [...rootGetters.citiesAlphabetically];
    if (periodsGetters.model === null) return null;
    const model: ISegment[] = [...periodsGetters.model];
    if (model.length === 0) return [];
    if (model[0].current) model.splice(0, 1);
    const segmentLengths = model.map((segment: ISegment) => segment.cards.length);

    return cities.map((city) => {
      console.log(); // debug
      console.log(`City: [${city.id}] ${city.name}`); // debug
      const forecast: { [k: string]: string } = {};

      for (let cardsDrawn = 1; cardsDrawn <= 8; cardsDrawn += 1) {
        console.log(`CardsDrawn: ${cardsDrawn};`); // debug
        let segmentIndex = 0;
        let cardsLeftToDraw = cardsDrawn;
        let guaranteedDraws = 0;
        let chanceOfNextCard = 0;
        while (cardsLeftToDraw > segmentLengths[segmentIndex]) {
          cardsLeftToDraw -= segmentLengths[segmentIndex];
          guaranteedDraws += appearancesOfCityInSegment(city, model[segmentIndex]);
          segmentIndex += 1;
          console.log(`segment rollover. segment ${segmentIndex} of ${model.length}`); // debug
        }
        if (segmentIndex < model.length) { // didn't run off the end of the model
          let cardsInSegment = segmentLengths[segmentIndex];
          let appearances = appearancesOfCityInSegment(city, model[segmentIndex]);
          const newGuaranteedDraws = (cardsLeftToDraw + appearances)
            - cardsInSegment;
          if (newGuaranteedDraws > 0) {
            guaranteedDraws += newGuaranteedDraws;
            appearances -= newGuaranteedDraws;
            cardsInSegment -= newGuaranteedDraws;
            cardsLeftToDraw -= newGuaranteedDraws;
          }
          chanceOfNextCard = chanceOfAtLeastOneOfXInYWithZ(
            appearances, cardsInSegment, cardsLeftToDraw,
          );
        } else { // debug
          console.log('no additional cards drawn.'); // debug
        } // debug
        forecast[`${cardsDrawn}c`] = `${guaranteedDraws}`;
        forecast[`${cardsDrawn}p`] = `${Math.round(chanceOfNextCard * 100)}%`;
      }

      const bottomCard = chanceOfFindingCityInSegment(city, model[model.length - 1], 1);
      const cityForecast: ICityForecast = {
        id: `${city.id}`,
        name: city.name,
        ...forecast,
        bottomCardChance: `${Math.round(bottomCard * 100)}%`,
      };
      return cityForecast;
    });
  },

};

export default getters;
