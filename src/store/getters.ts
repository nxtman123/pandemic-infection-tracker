import { GetterTree } from 'vuex';
import { RootState } from './types';
import { IPeriod } from './external-types';

interface Getters extends GetterTree<RootState, RootState> {
  periods: (s: RootState, _:any, rs: RootState) => IPeriod[];
}

const getters: Getters = {

  periods(state: RootState, _:any, rootState: RootState): IPeriod[] {
    return state.periods.map((cityIds, periodId) => ({
      id: periodId,
      cards: cityIds.map((cityId, position) => ({
        ...rootState.infectionDeck.deck[cityId],
        position,
      })),
    }));
  },

};

export default getters;
