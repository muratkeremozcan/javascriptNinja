var assert = require('assert');

function Ninja() {
  this.skulk = function() { // a property named skulk is added to the object, which makes skulk a method
    return true;
  };
  return 1; // NEW: the constructor returns a specific PRIMITIVE VALUE
}
// ES6 version
class NinjaES2015 {
  constructor() {
    this.skulk = function () {
      return true;
    };
    return 1; // NEW: the constructor returns a specific PRIMITIVE VALUE
  }
}
// the function is called a a constructor via the NEW operator
var ninja1 = new Ninja();
var ninja3 = new NinjaES2015();

assert(ninja1.skulk() === true, 'ninja value not true');
assert(ninja3.skulk() === true, 'ninja value not true');

assert(typeof ninja1 === 'object', 'ninja1 is not an object');
assert(typeof ninja1.skulk === 'function', 'ninja3 does not have a skulk method')
