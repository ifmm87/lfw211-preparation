const { ivan, cheff } = require('./prototype-chain-literal');

describe('testing ivan', () => {

  test('testing parent method cook', () => {
    expect(typeof ivan.cook).toBe('function');
    expect(ivan.hasOwnProperty('cook')).toBe(false);
  })
  test('testing chain of type property ', () => {
    expect(ivan.type).toEqual('first')
    delete ivan.type;
    expect(ivan.type).toEqual('Basic food')
  })
})
