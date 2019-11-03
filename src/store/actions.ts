import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import persistApi from '@/api/persist';

const actions: ActionTree<RootState, RootState> = {

  async startup({ dispatch }) {
    if (await persistApi.hasData()) {
      dispatch('loadState');
    } else {
      dispatch('newDeck');
    }
  },

  async loadState({ commit }) {
    const state = await persistApi.load();
    commit('setState', state);
  },

  async persistState({ state }) {
    await persistApi.persist(state);
  },

};

export default actions;
