import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { PeriodsState } from './types';
import { ICityCardInPeriod } from '@/store/external-types';

const actions: ActionTree<PeriodsState, RootState> = {

  async removeCardFromPeriod({ commit, dispatch }, card: ICityCardInPeriod) {
    commit('removeCardFromPeriod', card);
    dispatch('persistState');
  },

  async epidemic({ commit, dispatch }) {
    commit('epidemic');
    dispatch('persistState');
  },

};

export default actions;
