function wolf (name) {
  const howl = () => {
    console.log(name, '  howl');
  }
  return { howl };
}

function dog (name) {
  name = name + ' the dog';
  const woof = () => { console.log(name + ': woof')}
  return {
    ...wolf(name),
    woof
  }
}

const rufus = dog('rufus');
rufus.woof();
rufus.howl();
