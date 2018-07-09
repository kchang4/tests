const add = require("./add");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("adds a + 3 to throw an error", function () {
  expect(() => {
    add("a", 3);
  }).toThrowError("a must be a number");
});

test("adds 6 + b to throw an error", function () {
  expect(() => {
    add(6, "b");
  }).toThrowError("b must be a number");
});