import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import persistApi from '@/api/persist';

const actions: ActionTree<RootState, RootState> = {

  newDeck({ commit }) {
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
