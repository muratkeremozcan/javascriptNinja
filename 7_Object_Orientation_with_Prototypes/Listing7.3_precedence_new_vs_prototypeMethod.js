var assert = require('assert');

function Ninja() {
  this.swung = false; // creates an instance variable that holds a boolean value
  Ninja.prototype.swingSword = function () { // INSTANCE METHOD > takes precedence 
    return !this.swung; // creates an instance variable that returns the inverse of this.swung
  };
}
Ninja.prototype.swingSword = function() { // PROTOTYPE METHOD with the same name as the instance method
  return this.swung; // ineffective over instance method
}

const ninja = new Ninja(); // when we access property swingSword on inja, there's no need to traverse the prototype chain
console.log(ninja.swingSword()); // the property found within the constructor is immediately found and returned