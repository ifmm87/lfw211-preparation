const name = 'ivan';
const wolf = {
  howl: function () { console.log(this.name + ': awoooooooo')}
}
const dog = Object.create(wolf, {
  woof: { value: function () { console.log(this.name+ ': woof')}} 
})

function createDog (name) {
  return Object.create(dog, {
    name: { value: name + 'the dog'}
  });
}

const pepe = createDog('pepe');
pepe.howl();
pepe.woof();
