import { MutationTree } from 'vuex';
import { ICityCardInPeriod, IPeriod } from '@/store/external-types';
import { PeriodsState } from './types';

const mutations: MutationTree<PeriodsState> = {

  addPeriod(state: PeriodsState) {
    state.periods.push([]);
  },

  addCardToPeriod(state: PeriodsState, card: ICityCardInPeriod) {
    state.periods[card.periodId].push(card.cityId);
  },

  removePeriod(state: PeriodsState, period: IPeriod) {
    state.periods.splice(period.id, 1);
  },

  removeCardFromPeriod(state: PeriodsState, card: ICityCardInPeriod) {
    state.periods[card.periodId].splice(card.position, 1);
  },

};

export default mutations;
