// function fn() {
//   this.id = 1987;
//   return (offset) => {
//    console.log(this.id + offset)
//   }
// }
this.a = 8;
const fn = (a) =>  {
  console.log(this);
  return Math.pow(this.a, 2);
}
console.log(fn(9))
console.log(fn)
// console.log(fn()(99));
