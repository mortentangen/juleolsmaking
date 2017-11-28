const getUserScore = votes => Object.values(votes).reduce((a, b) => a + b, 0);
const getTotalScore = allBeerVotes => Object.values(allBeerVotes).reduce((a, b) => a + getUserScore(b), 0);

export { getUserScore, getTotalScore };