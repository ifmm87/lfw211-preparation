const buffer = Buffer.alloc(128);
 function print() {
    console.log(buffer);
    console.log(buffer.length);
    console.log(String(buffer));
 }

function printContent() {
  buffer.filter(value => !!value)
    .forEach((val, pos) => {
      console.log(`${pos}: "${String.fromCharCode(val)}"`)
    })
}

print();
printContent();


buffer.write('hellooooo')
print(); printContent();
buffer.fill('dd')
print(); printContent();
