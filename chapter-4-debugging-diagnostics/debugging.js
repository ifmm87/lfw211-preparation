function fn(n = 99) {
  if (n === 0) return 0;
  debugger;
  fn(n - 1);
}
fn();
debugger;
