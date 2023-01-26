var length = 10;
function fn() {
  console.log('>>>',this.length);
}
var obj = {
  length: 5,
  method: function(fn) {
    fn();
    console.log('>>>', arguments[0])
    arguments[0]();
  }
};

obj.method(fn, 1);

/* const name = 'ivan'; */
/* function ag() { */
/*   this.name = 'ivan'; */
/*   this.axu = 'axuuu'; */
/*   this.dot = function() { */
/*     console.log(this, this.name) */
/*   } */
/* } */
/* const a = new ag() */
/* a.dot() */
