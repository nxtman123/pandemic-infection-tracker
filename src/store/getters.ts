import { GetterTree } from 'vuex';
import { RootState } from '@/store/types';

const getters: GetterTree<RootState, RootState> = {

  citiesAlphabetically: state => state.deck.sort((a, b) => (a.name <= b.name ? -1 : 1)),

  citiesOrderedByCount: state => state.deck.sort((a, b) => a.count - b.count),

  getCityById: state => (id: number) => {
    if (state.deck.length >= id) throw new Error('Invalid City ID');
    return state.deck[id];
  },

};

export default getters;
