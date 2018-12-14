import {
  ETTERSMAK,
  MUNNFOLELSE,
  SMAK,
  LUKT
} from './constants/BeerCharacteristicType';

const defaultFilter = {
  [LUKT]: true,
  [MUNNFOLELSE]: true,
  [SMAK]: true,
  [ETTERSMAK]: true
};

const getValueOrZero = (value, filter) => {
  console.log('VALUE: ', value);
  return value;
};

const getUserScore = (votes, filter = defaultFilter) =>
  Object.entries(votes).reduce(
    (sum, [characteristic, score]) => (sum + (filter[characteristic] ? score : 0)),
    0
  );

const getTotalBeerScore = (allBeerVotes, filter = defaultFilter) =>
  Object.values(allBeerVotes).reduce((a, b) => a + getUserScore(b, filter), 0);

const sortByScore = (votes, filter) =>
  Object.entries(votes)
  .map(([beerId, beerVotes]) => {
    return {
      beerId,
      score: getTotalBeerScore(beerVotes, filter)
    };
  })
  .sort((a, b) => {
    return b.score - a.score;
  });

export { getUserScore, getTotalBeerScore, sortByScore };
