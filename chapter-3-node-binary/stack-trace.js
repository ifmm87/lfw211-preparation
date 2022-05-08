function fn(n=99)
{
  if(n === 0) throw Error('error');
  fn(n - 1)
}
fn()
