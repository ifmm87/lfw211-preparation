const hero = {
  _name: 'John Doe',
  getSecretIdentity: () => {
    return this._name;
  }
};

const stoleScretIdentity = hero.getSecretIdentity;

console.log(stoleScretIdentity())
console.log(hero.getSecretIdentity())
