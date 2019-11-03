import { MutationTree } from 'vuex';
import { RootState } from '@/store/types';

const mutations: MutationTree<RootState> = {

  epidemic(state: RootState) {
    state.periods.push([]);
  },

  setState(state: RootState, newState: RootState) {
    state.infectionDeck = newState.infectionDeck;
    state.periods = newState.periods;
  },

};

export default mutations;
