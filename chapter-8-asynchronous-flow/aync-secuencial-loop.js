function doAsyncTask(numericData, cb) {
  const secs = Math.random() * 1000;
  console.log(`to run doAsyncTask for ${numericData} - takes ${secs}`);
  setTimeout(() => cb(numericData * 2), secs);
}

const actions = [1, 2, 3, 4, 5];
const results = [];

function run (item) {
  if (item) {
    doAsyncTask(item, (result) => {
      results.push(result);
      run(actions.shift());
    });
  } else {
    console.log('endddd', results);
  }
}
run(actions.shift());
