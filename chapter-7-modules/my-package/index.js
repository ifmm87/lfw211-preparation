if(require.main === module) {
  console.log('this is running directly')
  const [,, str] = process.argv;

  console.log( str.toUpperCase());

} else {
  console.log('this is runing by calling require');
  module.exports = (str) => str.toUpperCase();
}
