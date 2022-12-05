function Persona() {
  //  this.walk = function () {
  //   console.log('walking');
  // }
}
Persona.prototype.run = function () {
  console.log('running');
};
Persona.prototype.walk = function () {
  console.log('walking');
};

function Cocinero() {
  this.picar = function () {
    console.log('picando');
  };
}
Cocinero.prototype = Object.create(Persona.prototype);
// tiene que ir despues
Cocinero.prototype.rallar = function () {
  console.log('rallando');
};
// const jose = new Cocinero();
// jose.picar()
// jose.run()
// jose.rallar()
// jose.walk()
// console.log(Cocinero.prototype.__proto__)
// console.log(Object.prototype.__proto__)
module.exports = { Cocinero, Persona };
