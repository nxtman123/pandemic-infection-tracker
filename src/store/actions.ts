import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';

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

};

export default actions;
