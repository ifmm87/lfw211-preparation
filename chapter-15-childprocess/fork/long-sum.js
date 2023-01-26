function longSum() {
  let sum = 0;
  for (let index = 0; index < 2e9; index++) {
    sum += index;
  }
  return sum;
}

process.on('message', () => {
  const sum = longSum();
  process.send(sum)
})
