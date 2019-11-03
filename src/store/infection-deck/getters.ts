import { GetterTree } from 'vuex';
import { InfectionDeckState } from './types';
import { ICity } from '@/store/external-types';
import { RootState } from '@/store/types';

interface Getters extends GetterTree<InfectionDeckState, RootState> {
  citiesAlphabetically: (s: InfectionDeckState) => ICity[];
}

const getters: Getters = {

  citiesAlphabetically(state: InfectionDeckState): ICity[] {
    const deck = [...state.deck];
    return deck.sort((a, b) => (a.name <= b.name ? -1 : 1));
  },

};

export default getters;
