import persistApi from '../api/persist';

const actions = {

  async startup({ dispatch }) {
    if (await persistApi.hasData()) {
      const state = await persistApi.load();
      if (state) this.replaceState(state);
    } else {
      dispatch('newDeck');
    }
  },

  async persistState({ state }) {
    await persistApi.persist(state);
  },

  newDeck({ commit }) {
    const cityNames = [
      'New York',
      'Washington',
      'Jacksonville',
      'São Paulo',
      'London',
      'Istanbul',
      'Tripoli',
      'Cairo',
      'Lagos',
      'Chicago',
      'Atlanta',
      'Denver',
      'San Francisco',
      'Los Angeles',
      'Mexico City',
    ];
    cityNames.forEach(name => commit('newCity', name));
  },

};

export default actions;
