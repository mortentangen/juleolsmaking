export default (users, votes = {}) => {
  const userIds = Object.values(votes)
    .map(vote => Object.keys(vote))
    .reduce((acc, val) => acc.concat(val), []);

  return Object.values(users).filter(user => userIds.includes(user.uid));
};
