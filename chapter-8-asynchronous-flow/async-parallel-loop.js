const doAsyncTask = (number, cb) => {
  console.log(`doing something async ##  ${number}, it takes 1 sec `);
  setTimeout(() => cb(number * number), Math.ceil(Math.random() * 1000));
}
const actions = [2,4,6,8, 10];
const results = [];

actions.forEach(item => {
  doAsyncTask(item, (result) => {
    results.push(result);
    if (results.length === actions.length) {
      console.log('ENdddd', results);
    }
  })
})

