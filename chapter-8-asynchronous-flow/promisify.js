const { readFile } = require('fs');

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
      args.push(callback);
      fn.call(this, ...args);
    })
  }
}

async function run() {
  const readFilePromise = promisify(readFile);
  try {
    const result =  await readFilePromise('./my-file.txt', 'utf-8');
    console.log('the result', result)
  } catch(error) {
    console.log(error)
  }
}
run();

