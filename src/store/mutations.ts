import { MutationTree } from 'vuex';
import { City, RootState } from '@/store/types';

const mutations: MutationTree<RootState> = {

  newCity(state: RootState, name: string) {
    state.deck.push({
      id: state.deck.length,
      name,
      count: 0,
    });
  },

  updateCity(state: RootState, city: City) {
    state.deck.splice(city.id, 1, city);
  },

  epidemic(state: RootState) {
    state.periods.push([]);
  },

  setState(state: RootState, newState: RootState) {
    state.deck = newState.deck;
    state.periods = newState.periods;
  },

};

export default mutations;
