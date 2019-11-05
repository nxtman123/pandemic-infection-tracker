import { GetterTree } from 'vuex';
import { ICityForecast, IPeriod, ISegment } from '@/store/external-types';
import { RootState } from '@/store/types';
import { PeriodsState } from './types';
import {
  appearancesOfCityInSegment,
  chanceOfAtLeastOneOfXInYWithZ,
  chanceOfFindingCityInSegment,
} from '@/store/periods/utils';

interface Getters extends GetterTree<PeriodsState, RootState> {
  periods: (s: PeriodsState, _: any, __: any, rg: GetterTree<RootState, RootState>) => IPeriod[];
  model: (s: PeriodsState, _: any, __: any, rg: GetterTree<RootState, RootState>)
    => ISegment[] | null;
  forecast: (s: PeriodsState, g: any, __: any, rg: GetterTree<RootState, RootState>) => (ir: number)
    => ICityForecast[] | null;
}

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

  forecast: (_: any, periodsGetters: any, __: any, rootGetters: any) => (iRate: number) => {
    const cities = [...rootGetters.citiesAlphabetically];
    if (periodsGetters.model === null) return null;
    const model: ISegment[] = [...periodsGetters.model];
    if (model.length === 0) return [];
    if (model[0].current) model.splice(0, 1);
    const segmentLengths = model.map((segment: ISegment) => segment.cards.length);

    return cities.map((city) => {
      console.log(); // debug
      console.log(`City: [${city.id}] ${city.name}`); // debug
      const forecast: { [k: string]: number } = {};

      for (let cardsDrawn = iRate; cardsDrawn <= 8 * iRate; cardsDrawn += iRate) {
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
        forecast[`c${cardsDrawn}`] = guaranteedDraws;
        forecast[`p${cardsDrawn}`] = Math.floor(chanceOfNextCard * 100);
      }

      const bottomCard = chanceOfFindingCityInSegment(city, model[model.length - 1], 1);
      const cityForecast: ICityForecast = {
        id: city.id,
        name: city.name,
        ...forecast,
        bottomCardChance: Math.floor(bottomCard * 100),
      };
      return cityForecast;
    });
  },

};

export default getters;
