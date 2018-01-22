const defArg1 = require('./defArg1');

test('Base case testing', () => {
  expect(defArg1(1,3)).toBe(2);
});

test('With negative numbers', () => {
  expect(defArg1(-1,3)).toBe(1);
});

test('with undefined arguments', () => {
  expect(defArg1(undefined,undefined)).toBe(0.5);
});

test('With one argument', () => {
  expect(defArg1(0)).toBe(0.5);
});

test('With one argument as undefined', () => {
  expect(defArg1(undefined)).toBe(0.5);
});

test('With one of the arguments as undefined', () => {
  expect(defArg1(1,undefined)).toBe(1);
});

test('With no arguments', () => {
  expect(defArg1()).toBe(0.5);
});
