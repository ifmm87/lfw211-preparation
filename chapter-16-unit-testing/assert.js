const assert = require('assert')

const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw Error('inputs must be numbers')
  }
  return a + b
}

assert.throws(() => add('5', '5'), Error('inputs must be numbers'))
assert.doesNotThrow(() => add(5, 5))

assert.equal(add(3,5), 8)
assert.strictEqual(add(3,5), 8)



const obj = {
  id: 1,
  name: { first: 'David', second: 'Clements' }
}
assert.deepEqual(obj, {
  id: 1,
  name: { first: 'David', second: 'Clements' }
})
const obj1 = {
  id: 1,
  name: { first: 'David', second: 'Clements' }
}
// this will fail because id is a string instead of a number
assert.strict.deepEqual(obj1, {
  id: 1,
  name: { first: 'David', second: 'Clements' }
})
