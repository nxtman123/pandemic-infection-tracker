import { GetterTree } from 'vuex';
import { City, Period, RootState } from '@/store/types';

interface Getters extends GetterTree<RootState, RootState> {
  citiesAlphabetically: (s: RootState) => City[];
  periods: (s: RootState) => Period[];
}

const getters: Getters = {

  citiesAlphabetically(state: RootState): City[] {
    const deck = [...state.deck];
    return deck.sort((a, b) => (a.name <= b.name ? -1 : 1));
  },

  periods(state: RootState): Period[] {
    return state.periods.map((cityIds, periodId) => ({
      id: periodId,
      cards: cityIds.map((cityId, position) => ({
        ...state.deck[cityId],
        position,
      })),
    }));
  },

};

export default getters;
