import { GetterTree } from 'vuex';
import { ICity } from '@/store/external-types';
import { RootState } from '@/store/types';
import { InfectionDeckState } from './types';

interface Getters extends GetterTree<InfectionDeckState, RootState> {
  cityFromId: (s: InfectionDeckState) => (c: number) => ICity;
  citiesAlphabetically: (s: InfectionDeckState) => ICity[];
  deckAsCardIds: (s: InfectionDeckState) => number[];
}

const getters: Getters = {

  cityFromId: (state: InfectionDeckState) => (id: number) => ({
    id,
    ...state.deck[id],
  }),

  citiesAlphabetically(state: InfectionDeckState): ICity[] {
    const deck = [...state.deck];
    return deck.sort((a, b) => (a.name <= b.name ? -1 : 1));
  },

  deckAsCardIds(state: InfectionDeckState): number[] {
    return state.deck.map((city: ICity) => Array(city.cardCount).fill(city.id)).flat();
  },

};

export default getters;
