const { readFile } = require('fs');
// readFile('./callbacks.md', (err, contents) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(contents.toString());
// });


const [first, second, third] = Array.from(Array(3)).fVill(__filename);
const print = (err, contents) => {
  if(err) {
    console.error(err);
    return;
  }
  console.log(contents.toString());
}
// readFile(first, print);
// readFile(second, print);
// readFile(third, print);

readFile(first, (err, contents) => {
  print(err, contents);
  readFile(second, (err, contents) => {
    print(err, contents);
    readFile(third, print);
  });
});
