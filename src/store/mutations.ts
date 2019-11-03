import { MutationTree } from 'vuex';
import { RootState } from '@/store/types';

const mutations: MutationTree<RootState> = {

  setState(state: RootState, newState: RootState) {
    state.infectionDeck = newState.infectionDeck;
    state.periods = newState.periods;
  },

};

export default mutations;
