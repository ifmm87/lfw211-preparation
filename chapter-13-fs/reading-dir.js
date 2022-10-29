const { readdir, readdirSync } = require('fs');
const { readdir: readdirProm } = require('fs').promises;
try {
  console.log('sync', readdirSync(__dirname));
} catch {
  console.error(err);
}
console.log('aaaa')
readdir(__dirname, (err, files) => {
  if (err) console.log(err);
  console.log('callback', files)
});
console.log('bbbb')

async function run () {
  const files = await readdirProm(__dirname);
  console.log('promise', files);
}

run().catch(console.err);
