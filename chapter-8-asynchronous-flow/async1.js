const { readFile, writeFile } = require('fs').promises;
const path = require('path');
const print = contents => console.log(contents.toString());

// async function run () {
//   const data = [];
//   for(const file of files) {
//     data.push(await readFile(file));
//   }
//   print(Buffer.concat(data));
// }
  async function run () {
    const filePath = path.join(__dirname, 'my-file.txt');
    await writeFile(filePath, 'my content..........');
    const files = Array.from(Array(3)).fill(filePath);
    const readers = files.map(file => readFile(file));
    const data = await Promise.all(readers);
    print(Buffer.concat(data));
  }
run().catch(console.error);
