const getUserScore = votes => Object.values(votes).reduce((a, b) => a + b, 0);
const getTotalBeerScore = allBeerVotes => Object.values(allBeerVotes).reduce((a, b) => a + getUserScore(b), 0);
const sortByScore = votes =>
	Object.entries(votes)
		.map(([beerId, beerVotes]) => ({
			beerId,
			score: getTotalBeerScore(beerVotes)
		}))
		.sort(((a, b) => a.score < b.score ));

export { getUserScore, getTotalBeerScore, sortByScore };