import { ActionTree } from 'vuex';
import { InfectionDeckState } from '@/store/infection-deck/types';
import { RootState } from '@/store/types';
import { ICity } from '@/store/external-types';

const actions: ActionTree<InfectionDeckState, RootState> = {

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

  async updateCity({ commit, dispatch }, city: ICity) {
    commit('updateCity', city);
    dispatch('persistState');
  },

};

export default actions;
