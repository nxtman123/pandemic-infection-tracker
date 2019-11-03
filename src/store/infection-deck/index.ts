import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { InfectionDeckState } from './types';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const infectionDeck: Module<InfectionDeckState, RootState> = {
  state: {
    deck: [],
  },
  getters,
  mutations,
  actions,
};

export default infectionDeck;
