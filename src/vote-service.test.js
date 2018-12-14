import { getTotalBeerScore, sortByScore, getUserScore } from './vote-service';

Object.values = obj => Object.keys(obj).map(key => obj[key]);
if (!Object.entries)
  Object.entries = function(obj) {
    let ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array
    while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };

const votes = {
  '1': {
    user1: {
      ettersmak: 4,
      lukt: 5,
      munnfolelse: 4,
      smak: 3
    },
    user2: {
      ettersmak: 2,
      lukt: 4,
      munnfolelse: 4,
      smak: 2
    }
  },
  '2': {
    user1: {
      ettersmak: 5,
      lukt: 5,
      munnfolelse: 5,
      smak: 5
    },
    user2: {
      ettersmak: 4,
      lukt: 2,
      munnfolelse: 3,
      smak: 2
    }
  },
  cervisiam_1: {
    user1: {
      ettersmak: 3,
      lukt: 2
    }
  }
};

describe('getUserScore', () => {
  it('calculate user score without filter', () => {
    expect(getUserScore(votes[1]['user1'])).toBe(16);
  });

  it('calculate user score with smak, munnfolelse, ettersmak activated', () => {
    expect(
      getUserScore(votes[1]['user1'], {
        lukt: false,
        smak: true,
        munnfolelse: true,
        ettersmak: true
      })
    ).toBe(11);
  });

  it('calculate user score with munnfolelse, ettersmak activated', () => {
    expect(
      getUserScore(votes[1]['user1'], {
        lukt: false,
        smak: false,
        munnfolelse: true,
        ettersmak: true
      })
    ).toBe(8);
  });

  it('calculate user score with ettersmak activated', () => {
    expect(
      getUserScore(votes[1]['user1'], {
        lukt: false,
        smak: false,
        munnfolelse: false,
        ettersmak: true
      })
    ).toBe(4);
  });

  it('calculate user score with nothing activated', () => {
    expect(
      getUserScore(votes[1]['user1'], {
        lukt: false,
        smak: false,
        munnfolelse: false,
        ettersmak: false
      })
    ).toBe(0);
  });
});

describe('getTotalBeerScore', () => {
  it('calculate total beer score', () => {
    expect(getTotalBeerScore(votes[1])).toBe(28);
  });

  it('calculate total beer score with smak, ettersmak activated', () => {
    expect(
      getTotalBeerScore(votes[1], {
        lukt: false,
        munnfolelse: false,
        smak: true,
        ettersmak: true
      })
    ).toBe(11);
  });
});

describe('sortByScore', () => {
  it('order beers by score', () => {
    const orderedBeers = sortByScore(votes);
    console.log('orderedBeers', orderedBeers);
  });
});
