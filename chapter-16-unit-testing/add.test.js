const assert = require('assert')
const  { add } = require('./add');
// const { describe , it} = require('node:test')

describe('testing adding', () => {
  it('testing add', () => {
    assert.throws(() => add('5', '5'), { message: 'inputs must be numbers'})
    assert.doesNotThrow(() => add(5, 5))

    assert.equal(add(3,5), 8)
    assert.strictEqual(add(3,5), 8)
    assert.throws(() => add(3, -5), { message: 'numbers cannot be less than 0'})
  })
  it('testing abj', () => {
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
  })
})

describe('testing obje', () => {
})
