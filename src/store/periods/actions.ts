import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { ICityCardInPeriod, IPeriod } from '@/store/external-types';
import { PeriodsState } from './types';

const actions: ActionTree<PeriodsState, RootState> = {

  async removeCardFromPeriod({ commit, dispatch }, card: ICityCardInPeriod) {
    commit('removeCardFromPeriod', card);
    dispatch('persistState');
  },

  async removePeriod({ commit, dispatch }, period: IPeriod) {
    commit('removePeriod', period);
    dispatch('persistState');
  },

  async epidemic({ commit, dispatch }) {
    commit('epidemic');
    dispatch('persistState');
  },

};

export default actions;
