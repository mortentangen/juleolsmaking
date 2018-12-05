import getUsersWithVotes from './get-users-with-votes';

describe('getUsersWithVotes', () => {
  const users = {
    foo: { displayName: 'Foo', uid: 'foo' },
    bar: { displayName: 'Bar', uid: 'bar' }
  };

  it('should not get users without votes', () => {
    const votes = { beer_1: { baz: { smak: 5 } } };
    expect(getUsersWithVotes(users, votes)).toEqual([]);
  });

  it('should get user with votes', () => {
    const votes = { beer_1: { bar: { smak: 5 } } };
    expect(getUsersWithVotes(users, votes)).toEqual([users.bar]);
  });

  it('should get multiple users with votes on different beers', () => {
    const votes = {
      beer_1: { bar: { smak: 5 } },
      beer_2: { foo: { smak: 2 } }
    };
    expect(getUsersWithVotes(users, votes)).toEqual([users.foo, users.bar]);
  });

  it('should get multiple users with votes on same beer', () => {
    const votes = {
      beer_1: { bar: { smak: 5 }, foo: { smak: 3 } }
    };
    expect(getUsersWithVotes(users, votes)).toEqual([users.foo, users.bar]);
  });
});
