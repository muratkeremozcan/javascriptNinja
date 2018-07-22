var assert = require('assert');

function Ninja() { // constructor
  var feints = 0; // PRIVATE VARIABLE: the scope of this var inside the constructor function
  this.getFeints = function() { // ACCESSOR METHOD: READ-ONLY ACCESS to var feints
    return feints;
  };
  this.feint = function() { // feint incrementor: can only increment feint with this function
    feints++;
  };
}

var ninja1 = new Ninja(); // instantiate a ninja
ninja1.feint(); // call the feint method to increment feints

assert(ninja1.feints === undefined, 'error: could access private variable'); // cannot access feints private variable
assert(ninja1.getFeints() === 1, 'error: could not access private variable via accessor method'); // can ONLY access private var with this method

var ninja2 = new Ninja(); // instantiate a ninja
assert(ninja2.getFeints() === 0, 'error: ould not access private variable via accessor method'); // another instance has its own private variable