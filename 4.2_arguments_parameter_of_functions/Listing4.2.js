var assert = require('assert');

function sum() { // function with no parameters
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) { // but we can iterate through any passed in arguments
    sum += arguments[i];
  }
  return sum;
}

// function called with any number of parameters called works
assert(sum(1,2) === 3, "error adding numbers");
assert(sum(1, 2, 3) === 6, "error adding numbers");
assert(sum(1, 2, 3, 4) === 10, "error adding numbers");