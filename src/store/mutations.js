import uuidv4 from 'uuid/v4';

const mutations = {

  addPeriod(state) {
    state.periods.push([]);
  },

  addCardToPeriod(state, card) {
    state.periods[card.periodId].push(card.cityId);
  },

  deletePeriod(state, period) {
    state.periods.splice(period.id, 1);
  },

  deleteCard(state, card) {
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
    state.infectionDeck.push({
      id: uuidv4(),
      name: city.name,
      color: city.color,
      cardCount: city.cardCount,
    });
  },

  updateCity(state, newCity) {
    const oldCity = state.infectionDeck.find(c => c.id === newCity.id);
    if (oldCity) {
      oldCity.name = newCity.name;
      oldCity.color = newCity.color;
      oldCity.cardCount = newCity.cardCount;
    }
  },

  deleteCityById(state, cityId) {
    state.infectionDeck.splice(
      state.infectionDeck.findIndex(c => c.id === cityId),
      1,
    );
  },

  setInfectionRate(state, value) {
    state.infectionRate = value;
  },

};

export default mutations;
