const { readFile } = require('fs').promises;
const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename);

const print = (contents) => {
  console.log(contents.toString());
};

/* async function run () { */
/* const big = readFile(bigFile) */
/* const medium = readFile(mediumFile) */
/* const small = readFile(smallFile) */
/*  */
/* big.then(print) */
/* medium.then(print) */
/* small.then(print) */
/*  */
/* // await small */
/* // await medium */
/* // await big */
/* } */

const { promisify } = require('util');
const { readFile } = require('fs');

const read = promisify((cb) => {
  let index = 0;
  const print = (err, contents) => {
    index += 1;
    if (err) {
      console.error(err);
      if (index === 3) cb();
      return;
    }
    console.log(contents.toString());
    if (index === 3) cb();
  };
  readFile(bigFile, print);
  readFile(mediumFile, print);
  readFile(smallFile, print);
});

async function run() {
  await read();
  console.log('finished!');
}

run().catch(console.error);
