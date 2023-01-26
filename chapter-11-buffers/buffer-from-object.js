const buff = Buffer.from(new String('ivan mujica'))

console.log(buff.toString())


const buff2 = Buffer.from('this is a string');
console.log(buff2.indexOf('string'))
console.log(buff2.subarray(0, 3).toString());

const buffer = Buffer.alloc(10, 9);
// console.log(buffer[1])
const length = buffer.write('abcd', 3);
console.log(buffer)
console.log(`${length} bytes: ${buffer.toString('utf8', 8, 10)}`);
// for(let i of buff2){
//   console.log(i);
// }
