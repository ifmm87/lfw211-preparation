function almostSame(num1, num2) {
  return num2 - num1 < Number.EPSILON;
}
console.log(almostSame(0.1 + 0.3, 0.4))
