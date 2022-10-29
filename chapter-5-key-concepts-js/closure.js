function outerFn() {
  var foo = true;
  function print() { console.log(foo) };
  print()
  foo = false;
  print()
}
outerFn()
