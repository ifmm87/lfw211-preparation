class OddError extends Error {
  constructor (varName = '') {
    super(varName + ' must be even')
    this.code = 'IVAN_ERR';
  }
  get name () { return 'OddError' }
}

function doTask (amount) {
  if (typeof amount !== 'number') throw new TypeError('amount must be a number')
  if (amount <= 0) throw new OddError('amount must be greater than zero')
  return amount / 2
}
doTask(-1)
doTask('aaa')


