const defArg2 = require('./defArg2');

test('Test for Base case', () => {
  expect(defArg2('Hello',3)).toBe('Hello!!!');
});

test('With only one argument', () => {
  expect(defArg2('Hello')).toBe('Hello!!!!!');
});

test('With only one argument', () => {
  expect(defArg2('Hello', -1)).toBe(null);
});

test('With zero', () => {
  expect(defArg2('Hello',0)).toBe('Hello');
});
