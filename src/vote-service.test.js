import { getTotalBeerScore, sortByScore } from './vote-service';

Object.values = (obj) => Object.keys(obj).map(key => obj[key]);
if (!Object.entries)
	Object.entries = function (obj) {
		let ownProps = Object.keys(obj),
			i = ownProps.length,
			resArray = new Array(i); // preallocate the Array
		while (i--)
			resArray[i] = [ownProps[i], obj[ownProps[i]]];

		return resArray;
	};

const votes = {
	'1': {
		'PpfrXsaCbxOzaH135WXBLtWpZ6B3': {
			'ettersmak': 4,
			'lukt': 5,
			'munnfolelse': 4,
			'smak': 3
		},
		'Qo8xIKebkpfWNXEOWs3vUCicFy62': {
			'ettersmak': 2,
			'lukt': 4,
			'munnfolelse': 4,
			'smak': 2
		}
	},
	'2': {
		'PpfrXsaCbxOzaH135WXBLtWpZ6B3': {
			'ettersmak': 5,
			'lukt': 5,
			'munnfolelse': 5,
			'smak': 5
		},
		'Qo8xIKebkpfWNXEOWs3vUCicFy62': {
			'ettersmak': 4,
			'lukt': 2,
			'munnfolelse': 3,
			'smak': 2
		}
	},
	'cervisiam_1': {
		'PpfrXsaCbxOzaH135WXBLtWpZ6B3': {
			'ettersmak': 3,
			'lukt': 2
		}
	}
};

it('calculate total beer s(core', () => {
	expect(getTotalBeerScore(votes[1])).toBe(28);
});


it('order beers by score', () => {
	const orderedBeers = sortByScore(votes);
	console.log('orderedBeers', orderedBeers);
});
