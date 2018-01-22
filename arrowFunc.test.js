const arrowFunc = require("./arrowFunc");

test("Arrow function demostration", () => {
  expect(arrowFunc(["hello", "arrow" ,"function"])).toBe("haf");
});

test("Input empty array", () => {
  expect(arrowFunc([])).toBe("");
});

test("Array with empty spaces", () => {
  expect(arrowFunc(["hello"," "," "])).toBe("h  ");
});
