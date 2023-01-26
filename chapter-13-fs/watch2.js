const { watch, readdirSync, statSync } = require('fs');
const { join, resolve } = require('path');
const files = new Set(readdirSync('./test-dir'));

console.log(files);
const cwd = resolve('./test-dir');
let realEvent = '';

watch('./test-dir/', {}, (eventType, fileName) => {
  try {
    const { ctime, mtime, ctimeMs, mtimeMs } = statSync(`${cwd}/${fileName}`);
    if (!files.has(fileName)) {
      realEvent = `${fileName} added to test-dir/`;
      files.add(fileName);
    } else if (ctimeMs === mtimeMs) {
      realEvent = `${fileName} content was modified`;
    } else realEvent = `${fileName} status updated`;
  } catch (error) {
    if (error.code === 'ENOENT') {
      files.delete(fileName);
      realEvent = `${fileName} deleted from /test-dir`;
    }
  } finally {
    console.log(realEvent, files);
  }
});
