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

const chanceOfFindingCityInSegment = (city: ICity, segment: ISegment) => {
  let appearances = 0;
  segment.cards.forEach((card: ICityCardInSegment) => {
    if (card.cityId === city.id) appearances += 1;
  });
  return appearances / segment.cards.length;
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

  forecast(state: PeriodsState, get: any, __: any, rootGetters: any): ICityForecast[] | null {
    // set up
    const cities = [...rootGetters.citiesAlphabetically];
    if (get.model === null) return null;
    const model: ISegment[] = [...get.model];
    if (model.length === 0) return [];
    if (model[0].current) model.splice(0, 1);
    const segmentLengths = model.map((segment: ISegment) => segment.cards.length);

    return cities.map((city) => {
      const segmentProbabilities = model.map(
        (segment: ISegment) => chanceOfFindingCityInSegment(city, segment),
      );

      // forecast
      const forecast: number[] = [];
      let guaranteedDraws = 0;

      for (let cardsDrawn = 1; cardsDrawn <= 9; cardsDrawn += 1) {
        let segmentIndex = 0;
        let cardsDrawnThisSegment = cardsDrawn;
        while (cardsDrawnThisSegment > segmentLengths[segmentIndex]) {
          cardsDrawnThisSegment -= segmentLengths[segmentIndex];
          segmentIndex += 1;
        }

        forecast.push(guaranteedDraws
          + (cardsDrawnThisSegment * segmentProbabilities[segmentIndex]));

        if (cardsDrawnThisSegment === segmentLengths[segmentIndex]) {
          guaranteedDraws += cardsDrawnThisSegment * segmentProbabilities[segmentIndex];
        }
      }

      const cityForecast: ICityForecast = {
        id: city.id,
        name: city.name,
        forecast,
        bottomCardChance: chanceOfFindingCityInSegment(city, model[model.length - 1]),
      };
      return cityForecast;
    });
  },

};

export default getters;
