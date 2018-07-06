const divide = require("./divide");

test("divides 6 / 3 to equal 2", function () {
  expect(divide(6, 3)).toBe(2);
});