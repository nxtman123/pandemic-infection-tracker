import { MutationTree } from 'vuex';
import { ICity } from '@/store/external-types';
import { InfectionDeckState } from './types';

const mutations: MutationTree<InfectionDeckState> = {

  newCity(state: InfectionDeckState, name: string) {
    state.deck.push({
      id: state.deck.length,
      name,
      cardCount: 0,
    });
  },

  updateCityCardCount(state: InfectionDeckState, newCity: ICity) {
    const oldCity = state.deck.find(c => c.id === newCity.id);
    if (oldCity) oldCity.cardCount = newCity.cardCount;
  },

};

export default mutations;
