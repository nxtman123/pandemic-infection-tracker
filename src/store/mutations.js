import uuidv4 from 'uuid/v4';

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

  newCityByName(state, name) {
    state.infectionDeck.push({
      id: uuidv4(),
      name,
      color: 'gameBlue',
      cardCount: 1,
    });
  },

  newCity(state, city) {
    console.log(city);
    state.infectionDeck.push({
      id: uuidv4(),
      name: city.name,
      color: city.color,
      cardCount: city.cardCount,
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
