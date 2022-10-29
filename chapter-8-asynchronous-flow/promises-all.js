const { readFile } = require('fs').promises;
const files = Array.from(Array(3)).fill(__filename);
const data = [];
const print = (contents) => {
  console.log(Buffer.concat(contents).toString());
}
const readers = files.map(file => readFile(file));
Promise.all(readers)
  .then(print)
  .catch(console.error);

