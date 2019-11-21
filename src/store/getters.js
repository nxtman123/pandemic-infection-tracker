import {
  appearancesOfCityInSegment,
  chanceOfAtLeastOneOfXInYWithZ,
  chanceOfFindingCityInSegment,
} from './utils';

export default {

  cityFromId: state => id => ({
    id,
    ...state.infectionDeck[id],
  }),

  citiesAlphabetically(state) {
    const deck = [...state.infectionDeck];
    return deck.sort((a, b) => (a.name <= b.name ? -1 : 1));
  },

  deckAsCardIds(state) {
    return state.infectionDeck.map(city => Array(city.cardCount).fill(city.id)).flat();
  },

  periods(state, getters) {
    return state.periods.map((cityIds, periodId) => ({
      id: periodId,
      cards: cityIds.map((cityId, position) => {
        const city = getters.cityFromId(cityId);
        return {
          cityId,
          name: city.name,
          periodId,
          position,
        };
      }),
      current: periodId === state.periods.length - 1,
    }));
  },

  model(state, getters) {
    // set up
    const deck = [...getters.deckAsCardIds];
    if (deck.length === 0) {
      if (state.periods.length === 0
        || (state.periods.length === 1 && state.periods[0].length === 0)) return [];
      return null;
    }
    const model = [deck];

    // carry out the record
    try {
      state.periods.forEach((period) => {
        const discard = [];
        period.forEach((card) => {
          const lastSegment = model[model.length - 1];
          const index = lastSegment.indexOf(card);
          if (index >= 0) {
            lastSegment.splice(index, 1);
            if (lastSegment.length === 0) model.pop();
          } else {
            const firstSegment = model[0];
            const idx = firstSegment.indexOf(card);
            if (idx >= 0) {
              firstSegment.splice(idx, 1);
              if (firstSegment.length === 0) model.splice(0, 1);
            } else {
              throw Error(`Couldn't find card with cityId ${card} in first segment`);
            }
          }
          discard.push(card);
        });
        model.push(discard);
      });
    } catch (e) {
      return null;
    }

    // format for presentation
    return model.map((segment, segmentId) => ({
      id: segmentId,
      cards: segment.map((cityId, position) => {
        const city = getters.cityFromId(cityId);
        return {
          segmentId,
          cityId,
          name: city.name,
          position,
        };
      }).sort((a, b) => (a.name <= b.name ? -1 : 1)),
      current: segmentId !== 0 && segmentId === model.length - 1,
    })).reverse();
  },

  forecast: (state, getters) => {
    const iRate = state.infectionRate;
    const cities = [...getters.citiesAlphabetically];
    if (getters.model === null) return null;
    const model = [...getters.model];
    if (model.length === 0) return [];
    if (model[0].current) model.splice(0, 1);
    const segmentLengths = model.map(segment => segment.cards.length);

    return cities.map((city) => {
      console.log(); // debug
      console.log(`City: [${city.id}] ${city.name}`); // debug
      const forecast = {};

      for (let cardsDrawn = iRate; cardsDrawn <= 8 * iRate; cardsDrawn += iRate) {
        console.log(`CardsDrawn: ${cardsDrawn};`); // debug
        let segmentIndex = 0;
        let cardsLeftToDraw = cardsDrawn;
        let guaranteedDraws = 0;
        let chanceOfNextCard = 0;
        while (cardsLeftToDraw > segmentLengths[segmentIndex]) {
          cardsLeftToDraw -= segmentLengths[segmentIndex];
          guaranteedDraws += appearancesOfCityInSegment(city, model[segmentIndex]);
          segmentIndex += 1;
          console.log(`segment rollover. segment ${segmentIndex} of ${model.length}`); // debug
        }
        if (segmentIndex < model.length) { // didn't run off the end of the model
          let cardsInSegment = segmentLengths[segmentIndex];
          let appearances = appearancesOfCityInSegment(city, model[segmentIndex]);
          const newGuaranteedDraws = (cardsLeftToDraw + appearances)
            - cardsInSegment;
          if (newGuaranteedDraws > 0) {
            guaranteedDraws += newGuaranteedDraws;
            appearances -= newGuaranteedDraws;
            cardsInSegment -= newGuaranteedDraws;
            cardsLeftToDraw -= newGuaranteedDraws;
          }
          chanceOfNextCard = chanceOfAtLeastOneOfXInYWithZ(
            appearances, cardsInSegment, cardsLeftToDraw,
          );
        } else { // debug
          console.log('no additional cards drawn.'); // debug
        } // debug
        forecast[`c${cardsDrawn}`] = guaranteedDraws;
        forecast[`p${cardsDrawn}`] = Math.floor(chanceOfNextCard * 100);
      }

      const bottomCard = chanceOfFindingCityInSegment(city, model[model.length - 1], 1);
      return {
        id: city.id,
        name: city.name,
        ...forecast,
        bottomCardChance: Math.floor(bottomCard * 100),
      };
    });
  },

};
