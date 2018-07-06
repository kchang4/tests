const multiply = require("./multiply");

test("multiplies 5 * 6 to equal 30", function () {
  expect(multiply(5,6)).toBe(30);
});