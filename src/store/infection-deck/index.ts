import { Module } from 'vuex';
import { InfectionDeckState } from '@/store/infection-deck/types';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import { RootState } from '@/store/types';

const infectionDeck: Module<InfectionDeckState, RootState> = {
  state: {
    deck: [],
  },
  getters,
  mutations,
  actions,
};

export default infectionDeck;
