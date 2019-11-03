import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import persistApi from '@/api/persist';

const actions: ActionTree<RootState, RootState> = {

  async startup({ dispatch }) {
    if (await persistApi.hasData()) {
      const state = await persistApi.load();
      if (state) this.replaceState(state);
    } else {
      dispatch('newDeck');
    }
  },

  async persistState({ state }) {
    await persistApi.persist(state);
  },

};

export default actions;
