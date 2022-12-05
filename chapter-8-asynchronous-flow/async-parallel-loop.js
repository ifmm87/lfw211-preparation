const actions = [2,4,6,8, 10];
const results = [];
const multiplyByTwo = (num, cb) => {
  setTimeout(() => {
    cb(num*2);
  }, Math.ceil(Math.random() * 1000))
}
actions.forEach((elem, index) => {
  multiplyByTwo(elem, (double) => {
    results.push(double);
    if (index === actions.length -1) console.log('done: ', results);
  });
});
console.log(results);

