const { readFile } = require('fs').promises;
// const files = Array.from(Array(3)).fill(__filename);
const files = [ 'my-file.txt', 'my-file1.txt', 'my-file2.txt', 'my-file3.txt'];
const data = [];
const limit = files.length;
let counter = 0;
function read(file) {
  return readFile(__dirname + '/sample-files/' + file, 'utf8')
    .then(content => {
      counter++;
      data.push(content);
    if(counter < limit) return read(files.shift());
      return data;
    })
}
// ++++++++++++++++++++++++++++++
read(files.shift()).then(result => console.log(result))
// ++++++++++++++++++++++++++++++
