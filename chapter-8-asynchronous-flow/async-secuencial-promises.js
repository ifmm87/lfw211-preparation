const { readFile } = require('fs').promises;
// const files = Array.from(Array(3)).fill(__filename);
const files = [ 'my-file.txt', 'my-file1.txt', 'my-file2.txt', 'my-file3.txt'];
const data = [];
const limit = files.length;
let counter = 0;
async function read(file) {
  const result = await readFile(__dirname+'/sample-files/'+file, 'utf8');
  data.push(result);
  counter++;
  if(counter < limit) return read(files.shift());
  return data;
}
// +++++++++++++++++++++++++++++
read(files.shift()).then(result => console.log(result))
// ++++++++++++++++++++++++++++++
