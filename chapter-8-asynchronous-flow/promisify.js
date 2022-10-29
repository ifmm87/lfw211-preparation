const { readFile } = require('fs');
const { promisify } = require('util');
const readFilePromise = promisify(readFile);
const actualReadFilePromise = readFilePromise(__filename);

actualReadFilePromise
  .then((data) => console.log(data.toString()))
  .then(() => {
    console.log('finished!!')
  });

// readFile(__filename, (err, data) => {
//   console.log(data.toString());
// });
