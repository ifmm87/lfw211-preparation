const { readdir, readFile, statSync } = require('fs');
let files = [];

function readFiles() {
  return new Promise((resolve, reject) => {
    readdir(`${__dirname}/`, (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      const onlyFiles = result.filter(file => {
        return !statSync(file).isDirectory();
      })
      resolve(onlyFiles);
    });
  });
}
function readFilePromise(file) {
  return new Promise((resolve, reject) => {
    readFile(__dirname + '/' + file, (err, content) => {
      if(err) {
        console.error(file, err)
        reject(err);
        return;
      }
      resolve(content)
    });
  })

}
async function run() {
  try {
    files = await readFiles();
    console.log(files);
    const result = await Promise.all(files.map(file => readFilePromise(file)));
    console.log(result.join(''));
  } catch (error) {
    console.error(error);
  }
}
run();
