import Vue from 'vue';
import Vuex from 'vuex';

import { RootState } from '@/store/types';
import mutations from '@/store/mutations';
import actions from '@/store/actions';
import getters from '@/store/getters';
import infectionDeck from '@/store/infection-deck';
import periods from '@/store/periods';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: () => ({
    infectionDeck: {
      deck: [],
    },
    infectionRate: 2,
    periods: {
      periods: [],
    },
  }),
  getters,
  mutations,
  actions,
  modules: {
    infectionDeck,
    periods,
  },
  strict: true,
});
