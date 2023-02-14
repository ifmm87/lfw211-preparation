const persona = {
  age:99,
  firstName: 'Ivan',
  lastName: 'Mujica',
  height: 170,
  birthDate: '12/12/1987'
}
persona[Symbol.iterator] = function*() {
  for(let key in this) {
    yield [key, this[key]];
  }
};
persona[Symbol.iterator] = function() {
  let index = 0;
  let keys = Object.keys(this);
  return {
    next: () => {
      if(index < keys.length) return { value: this[keys[index++]], done: false }
      else { return { done: true } }
    }
  }

}
for(let [key , value] of persona) {
  console.log(key, value)
}
/* const iter = persona[Symbol.iterator](); */
/* console.log(iter.next()) */
/* console.log(iter.next()) */
/* console.log(iter.next()) */
/* console.log(iter.next()) */
