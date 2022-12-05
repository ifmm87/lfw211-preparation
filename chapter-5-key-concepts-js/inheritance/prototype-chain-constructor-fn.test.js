const { Cocinero, Persona } = require('./prototype-chain-constructor-fn');
let cocinero = null;
describe('testing Cocinero prototype', () => {
  beforeAll(() => {
    cocinero = new Cocinero();
  });
  test('picar is its own method', () => {
    expect(typeof cocinero.picar).toBe('function');
    expect(cocinero.hasOwnProperty('picar')).toEqual(true);
  });
  test('rallar is not its own method', () => {
    expect(typeof cocinero.rallar).toBe('function');
    expect(cocinero.hasOwnProperty('rallar')).toEqual(false); // cause it is on its pto
  });
  test('run is not its own method, but available anyway', () => {
    expect(typeof cocinero.walk).toBe('function');
    expect(cocinero.hasOwnProperty('run')).toEqual(false);
    // Object.prototype.hasOwnProperty.call(cocinero, 'run')
  });
  test('persona is prototype of cocinero', () => {
    expect(Persona.prototype.isPrototypeOf(cocinero)).toBe(true)
  })
});
