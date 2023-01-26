const { readdir, readFile } = require('fs');
let files;
const result = [];
readdir(__dirname+'/sample-files', (err, result) => {
  files = result;
  // console.log(files)
  run(files.shift())
})
function run(file) {
  if (file) {
    readFile(__dirname +'/sample-files/' + file, (error, content) => {
      // console.log(__dirname, file, content)
      result.push(content);
      run(files.shift());
    })
  } else {
    console.log(result.join(''));
  }
}
// run(files.shift())
