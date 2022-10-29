const { readFile } = require('fs').promises;

const [first, second, third] = Array.from(Array(3)).fill(__filename);
const print = (contents) => {
  console.log(contents.toString());
}

readFile(first)
  .then(resultFirst => {
    print(resultFirst);
    return readFile(second);
  })
  .then(resultSecond => {
    print(resultSecond);
    return readFile(third);
  })
  .then(print).catch(console.error);


function myAsyncOperation () {
  return new Promise((resolve, reject) => {
    doSomethingAsynchronous((err, value) => {
      if (err) reject(err)
      else resolve(value)
    })
  })
}

const promise = myAsyncOperation()
// next up: do something with promise
