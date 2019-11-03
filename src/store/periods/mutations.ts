import { MutationTree } from 'vuex';
import { ICityCardInPeriod, IPeriod } from '@/store/external-types';
import { PeriodsState } from './types';

const mutations: MutationTree<PeriodsState> = {

  removeCardFromPeriod(state: PeriodsState, card: ICityCardInPeriod) {
    state.periods[card.periodId].splice(card.position, 1);
  },

  removePeriod(state: PeriodsState, period: IPeriod) {
    state.periods.splice(period.id, 1);
  },

  epidemic(state: PeriodsState) {
    state.periods.push([]);
  },

};

export default mutations;
