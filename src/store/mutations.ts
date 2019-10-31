import { MutationTree } from 'vuex';
import { City, RootState } from '@/store/types';

const mutations: MutationTree<RootState> = {

  newCity(state: RootState, name: string) {
    state.deck.push({
      id: state.deck.length,
      name,
      count: 0,
    });
  },

  incrementCityCount(state: RootState, id: number) {
    if (state.deck.length >= id) throw new Error('Invalid City ID');
    state.deck[id].count += 1;
  },

  decrementCityCount(state: RootState, id: number) {
    if (state.deck.length >= id) throw new Error('Invalid City ID');
    if (state.deck[id].count <= 0) throw new RangeError("A city can't have fewer than zero cards");
    state.deck[id].count -= 1;
  },

  setDeck(state: RootState, deck: City[]) {
    state.deck = deck;
  },

};

export default mutations;
