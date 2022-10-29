const { execSync } = require('child_process');
// const output = execSync(`node -e "console.log('subprocess stdio')"`);
// console.log(output.toString());
try {
  execSync(`${process.execPath} -e " throw Error('kaboom')"`);
} catch(err) {
  console.error('caught error', err);
}
