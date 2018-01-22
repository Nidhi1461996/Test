const destructuring = require('./destructuring');

test('base case testing', () => {
  let answer={ username: 'fbar', email: 'foo@bar.com' };
  expect(destructuring([2, 'fbar', 'foo@bar.com', 23])).toEqual(answer);
});

test('base case testing', () => {
  let answer={};
  expect(destructuring([])).toEqual(answer);
});


test('base case testing', () => {
  let answer={username: 'fbar',email:undefined};
  expect(destructuring([2, 'fbar'])).toEqual(answer);
});
