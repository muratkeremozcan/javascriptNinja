var assert = require('assert');

function Ninja() {
  Ninja.prototype.swingSword = function () { // every function has a PROTOTYPE object we can modify
    return true;
  };
}

const ninja1 = Ninja(); // calls the function as a function, nothing happens
assert (ninja1 === undefined);

const ninja2 = new Ninja(); // calls the function as a constructor, a new object instance is created and it includes the method from the prototype of the function
assert (ninja2 && ninja2.swingSword && ninja2.swingSword());