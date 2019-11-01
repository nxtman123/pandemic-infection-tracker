import { ActionTree } from 'vuex';
import { City, RootState } from '@/store/types';
import persistApi from '@/api/persist';

const actions: ActionTree<RootState, RootState> = {

  async startup({ dispatch }) {
    if (await persistApi.hasData()) {
      dispatch('loadState');
    } else {
      dispatch('newDeck');
    }
  },

  newDeck({ commit, dispatch }) {
    const cityNames: string[] = [
      'New York',
      'Washington',
      'Jacksonville',
      'Sãl Paulo',
      'London',
      'Istanbul',
      'Tripoli',
      'Cairo',
      'Lagos',
      'Chicago',
      'Atlanta',
      'Denver',
      'San Francisco',
      'Los Angeles',
      'Mexico City',
    ];
    cityNames.forEach(name => commit('newCity', name));
    dispatch('persistState');
  },

  async updateCity({ commit, dispatch }, city: City) {
    commit('updateCity', city);
    dispatch('persistState');
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
