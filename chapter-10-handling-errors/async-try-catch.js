class OddError extends Error {
  constructor (varName = '') {
    super(varName + ' must be even')
    this.code = 'ODD_ERR';
  }
  get name () { return 'OddError' }
}

async function doTask (amount) {
  return new Promise((resolve, reject) => {
    if (amount % 2) {
      reject(new OddError('amount'));
    }
    resolve(amount/2);
  })
}
function syncTask () {
  throw new Error('testing')
}
module.exports = { doTask, syncTask, OddError };
// async function run () {
//   try {
//     const result = await doTask(3);
//     console.log('result', result);
//   } catch (err) {
//     if (err instanceof TypeError) {
//       console.error( 'wrong type');
//
//     } else if(err.code === 'ODD_ERR') {
//       console.error('must be odd', err);
//       console.error('', err);
//     }
//   }
// }
//  run();
