import Vue from 'vue';
import Vuex from 'vuex';

import { RootState } from '@/store/types';
import mutations from '@/store/mutations';
import actions from '@/store/actions';
import getters from '@/store/getters';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    deck: [],
    periods: [
      [3, 6, 1, 2, 2, 3],
      [3, 2, 2, 3],
      [2, 3],
      [3, 6, 1, 2, 2, 3, 3, 1, 2, 2],
    ],
  },
  getters,
  mutations,
  actions,
  strict: true,
});
