const obj = {
  foo : 'bar',
  func : function() {
    var self = this;
    console.log('outside of iife', this.foo);
    console.log('outside of iife', self.foo);
    (function() {
        console.log("inner func:  this.foo = " + this.foo);
        console.log("inner func:  self.foo = " + self.foo);
        }())
  }
}
obj.func();
