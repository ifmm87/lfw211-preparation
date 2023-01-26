let buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(10, 8);
const buf3 = Buffer.allocUnsafe(10, 8);
const buf4 = Buffer.from([1,2,3,4,5]);
const buf6 = Buffer.from([1,2,3,4,5]);
const buf5 = Buffer.from('ivan', 'utf8');
buf1 = Buffer.alloc(20)

console.log(buf1)
console.log(buf2)
console.log(buf3)

buf1.write('hello');
buf2.write('asdfasfasfsafas111')
console.log(buf1.toString())
console.log(buf2.toString())
console.log(buf3)
console.log(buf4)
console.log(buf5.toString())

for(const el of buf4) {
  console.log('elem', el)
}

console.log(buf5.toString())
for(const el of buf5) {
  console.log('elem', el.toString())
}

console.log('>>>>', buf4.compare(buf6))

const buffTotal = Buffer.concat([buf1, buf2])
console.log(buffTotal.toString())
