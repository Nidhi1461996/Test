const rest = require("./rest");

test("base case testing", () =>
  expect(rest(2,4,6,8)).toBe(5));

test("without any parameters", () =>
  expect(rest()).toBe(null));
