function outerFn() {
  var foo = true;
  function print() {
    foo = 'aaa'
    var foo ;
    console.log(foo);
  }
  print();
  foo = false;
  print();
}
outerFn();
