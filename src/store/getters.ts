import { GetterTree } from 'vuex';
import { RootState } from '@/store/types';

const getters: GetterTree<RootState, RootState> = {

  citiesAlphabetically: (state: RootState) => {
    const deck = [...state.deck];
    return deck.sort((a, b) => (a.name <= b.name ? -1 : 1));
  },

};

export default getters;
