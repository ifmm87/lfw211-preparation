const {  readFile, readFileSync, writeFileSync } = require('fs');
const path = require('path');

try {
  const content = readFileSync('./reading.md', { encoding: 'utf-8'});
  writeFileSync(path.join(__dirname, "output.txt"), content.toUpperCase(), { flag: "a", });
  console.log(path.resolve('output.txt'));

  readFile(path.join(__dirname, 'output.txt'), (err, data) => {
    // console.log(data.toString());
  })
} catch (error) {
  console.log('caputirnnnnnn', error.stack)
}

console.log('somethinggg');
