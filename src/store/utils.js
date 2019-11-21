
const binomialCoefficient = (n, k) => {
  // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-20.php
  let coefficient = 1;
  for (let x = n - k + 1; x <= n; x += 1) coefficient *= x;
  for (let x = 1; x <= k; x += 1) coefficient /= x;
  return coefficient;
};

export const chanceOfAtLeastOneOfXInYWithZ = (x, y, z) => {
  const hotCards = x;
  const totalCards = y;
  const drawnCards = z;
  const coldCards = totalCards - hotCards;

  console.log(`Odds of pulling at least 1 of ${hotCards} out of ${totalCards} with ${drawnCards} pulls`); // debug
  if (hotCards === 0 || drawnCards === 0) return 0;

  let form = '| ('; // debug
  let chance = 0;
  let hotCardsDrawn = Math.min(hotCards, drawnCards);
  while (hotCardsDrawn > 0) {
    const coldCardsDrawn = drawnCards - hotCardsDrawn;
    console.log(`| hotCardsDrawn: ${hotCardsDrawn}; coldCardsDrawn: ${coldCardsDrawn};`); // debug
    chance += (binomialCoefficient(hotCards, hotCardsDrawn)
      * binomialCoefficient(coldCards, coldCardsDrawn));
    form += `bc(${hotCards} ${hotCardsDrawn})*bc(${coldCards} ${coldCardsDrawn}) + `; // debug
    hotCardsDrawn -= 1;
  }
  chance /= binomialCoefficient(totalCards, drawnCards);
  form += `) / bc(${totalCards} ${drawnCards}) = ${chance}`; // debug
  console.log(form); // debug
  console.log('|'); // debug
  return chance;
};

export const appearancesOfCityInSegment = (city, segment) => {
  let appearances = 0;
  segment.cards.forEach((card) => {
    if (card.cityId === city.id) appearances += 1;
  });
  return appearances;
};

export const chanceOfFindingCityInSegment = (
  city, segment, drawnCards,
) => {
  const cardsInSegment = segment.cards.length;
  const hotCards = appearancesOfCityInSegment(city, segment);
  return chanceOfAtLeastOneOfXInYWithZ(hotCards, cardsInSegment, drawnCards);
};
