function divide(a, b) {
  if (isNaN(a)) {
    throw new Error("a must be a number");
  } else if (isNaN(b)) {
    throw new Error("b must be a number");
  }

  return a / b;
}

module.exports = divide;