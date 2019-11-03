import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { PeriodsState } from './types';

const actions: ActionTree<PeriodsState, RootState> = {

  async epidemic({ commit, dispatch }) {
    commit('epidemic');
    dispatch('persistState');
  },

};

export default actions;
