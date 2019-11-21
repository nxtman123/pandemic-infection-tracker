import { MutationTree } from 'vuex';
import { RootState } from '@/store/types';

const mutations: MutationTree<RootState> = {
  setInfectionRate(state, value) {
    state.infectionRate = value;
  },
};

export default mutations;
