const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('inputs must be numbers')
  }
  if (a < 0 || b < 0) throw new Error('numbers cannot be less than 0')
  return a + b
}
module.exports = { add }
