import { MutationTree } from 'vuex';
import { ICity } from '@/store/external-types';
import { InfectionDeckState } from './types';

const mutations: MutationTree<InfectionDeckState> = {

  newCity(state: InfectionDeckState, name: string) {
    state.deck.push({
      id: state.deck.length,
      name,
      count: 0,
    });
  },

  updateCity(state: InfectionDeckState, city: ICity) {
    state.deck.splice(city.id, 1, city);
  },

};

export default mutations;
