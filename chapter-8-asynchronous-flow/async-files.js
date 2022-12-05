const {readdir, readFile} = require('fs');

const files = ['my-file1.txt', 'my-file2.txt', 'my-file3.txt'];
const result = [];
function run(file) {
  if(file) {
    readFile(__dirname + '/' + file, (err, content) => {
      result.push(content.toString());
      run(files.shift())
    });
  } else {
    console.log(result.join(''));
  }
}
run(files.shift())
