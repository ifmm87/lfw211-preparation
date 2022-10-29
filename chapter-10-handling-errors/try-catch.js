try {
  const result = doTask('a')
  console.log('result', result)
} catch (err) {
  if (err instanceof TypeError) {
    console.error('wrong type')
  } else if (err instanceof RangeError) {
    console.error('out of range')
  } else if (err instanceof OddError) {
    console.error('cannot be odd')
  } else {
    console.error('Unknown error', err)
  }
}

function doTask (amount) {
  if (typeof amount !== 'number') throw new TypeError('amount must be a number')
  if (amount <= 0) throw new OddError('amount must be greater than zero')
  return amount / 2
}
