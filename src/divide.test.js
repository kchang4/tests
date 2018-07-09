const divide = require("./divide");

test("divides 6 / 3 to equal 2", function () {
  expect(divide(6, 3)).toBe(2);
});

test("divides a / 3 to throw an error", function () {
  expect(() => {
    divide("a", 3);
  }).toThrowError("a must be a number");
});

test("divides 6 / b to throw an error", function () {
  expect(() => {
    divide(6, "b");
  }).toThrowError("b must be a number");
});