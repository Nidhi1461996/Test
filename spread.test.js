const spread = require('./spread');

test('base case testing', () => {
  expect(spread([1,2,3,4,5,6,7])).toBe('The minimum of [1,2,3,4,5,6,7] is 1');
});

test('testing with empty array', () => {
  expect(spread([])).toBe(null);
});

test('testing with negative numbers', () => {
  expect(spread([1,-2,3,4,5,6,7])).toBe('The minimum of [1,-2,3,4,5,6,7] is -2');
});
