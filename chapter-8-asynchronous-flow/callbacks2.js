const { readFile } = require('fs');
const files = Array.from(Array(10)).fill(__filename);
const filesLength = files.length;
const result = [];
const print = (err, contents) => {
  if(err) {
    console.error(err);
    return;
  }
  console.group(`file ${count}`);
  console.log(contents.toString());
  console.groupEnd();
}
let count = 0;
const read = (file) => {
  readFile(file, (err, contents) => {
    count ++;
    if (err) print(err, null);
    else result.push(contents);

    if(count < filesLength) read(files.shift());
    else print(null, Buffer.concat(result));
  })
}
read(files.shift());

