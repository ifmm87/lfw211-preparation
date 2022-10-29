class OddError extends Error {
  constructor (varName = '') {
    super(varName + ' must be even')
    this.code = 'IVAN_ERR';
  }
  get name () { return 'OddError' }
}

async function doTask (amount) {
  return new Promise((resolve, reject) => {
    if (amount % 2) {
      reject(new OddError('amount error'));
    }
    resolve(amount/2);
  })
}

async function run () {
  try {
    const result = await doTask(3);
    console.log('result', result);
  } catch (err) {
    if (err instanceof TypeError) {
      console.error( 'wrong type');

    } else if(err.code === 'IVAN_ERR') {
      console.error('must be odd', err);
    }
  }
}
 run();
