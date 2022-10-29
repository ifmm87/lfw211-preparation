const {  readFile, readFileSync, writeFileSync } = require('fs');
const path = require('path');

const content = readFileSync('./reading.md', { encoding: 'utf-8'});
writeFileSync(path.join(__dirname,'output.txt'), content.toUpperCase(), { flag: 'a'});
// console.log(content);

readFile(path.join(__dirname, 'output.txt'), (err, data) => {
    console.log(data.toString());
})

console.log('somethinggg');