
const mutations = {

  addPeriod(state) {
    state.periods.push([]);
  },

  addCardToPeriod(state, card) {
    state.periods[card.periodId].push(card.cityId);
  },

  removePeriod(state, period) {
    state.periods.splice(period.id, 1);
  },

  removeCardFromPeriod(state, card) {
    state.periods[card.periodId].splice(card.position, 1);
  },

  newCity(state, name) {
    state.infectionDeck.push({
      id: state.infectionDeck.length,
      name,
      cardCount: 0,
    });
  },

  updateCityCardCount(state, newCity) {
    const oldCity = state.infectionDeck.find(c => c.id === newCity.id);
    if (oldCity) oldCity.cardCount = newCity.cardCount;
  },

  setInfectionRate(state, value) {
    state.infectionRate = value;
  },

};

export default mutations;
