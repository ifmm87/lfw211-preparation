const { join } = require('path');
const { readFile, writeFile } = require('fs').promises;

async function run () {
  const contents = await readFile(__filename, { encoding: 'utf8' });
  const out = join (__dirname, 'out.txt');
  await writeFile(out, contents.toString().toUpperCase());
}


run().catch(err => console.error);
