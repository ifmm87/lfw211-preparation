const { readFile } = require('fs');
const files = [ 'my-file.txt', 'my-file1.txt', 'my-file2.txt', 'my-file3.txt'];
const result = [];
function run() {
  files.forEach((file, index) => {
    readFile(__dirname+ '/sample-files/' + file, 'utf8', (err, content) => {
      result.push(content);
      if(result.length === files.length) console.log(result)
    });
  })
}
run();

