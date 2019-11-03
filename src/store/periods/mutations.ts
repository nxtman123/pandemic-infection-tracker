import { MutationTree } from 'vuex';
import { PeriodsState } from './types';

const mutations: MutationTree<PeriodsState> = {

  epidemic(state: PeriodsState) {
    state.periods.push([]);
  },

};

export default mutations;
