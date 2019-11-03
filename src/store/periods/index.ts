import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { PeriodsState } from './types';
import getters from '@/store/periods/getters';
import mutations from '@/store/periods/mutations';
import actions from '@/store/periods/actions';

const periods: Module<PeriodsState, RootState> = {
  state: {
    periods: [
      [3, 6, 1, 2, 2, 3],
      [3, 2, 2, 3],
      [2, 3],
    ],
  },
  getters,
  mutations,
  actions,
};

export default periods;
