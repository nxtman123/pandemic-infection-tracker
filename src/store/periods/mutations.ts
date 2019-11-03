import { MutationTree } from 'vuex';
import { PeriodsState } from './types';
import { ICityCardInPeriod } from '@/store/external-types';

const mutations: MutationTree<PeriodsState> = {

  removeCardFromPeriod(state: PeriodsState, card: ICityCardInPeriod) {
    state.periods[card.periodId].splice(card.position, 1);
  },

  epidemic(state: PeriodsState) {
    state.periods.push([]);
  },

};

export default mutations;
