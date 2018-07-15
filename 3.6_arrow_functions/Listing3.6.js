var assert = require('assert');

var greet = name => "Greetings " + name;
var anotherGreet = function(name) {
  return "Greetings " + name;
};

console.log(greet("Oishi"));
console.log(anotherGreet("Oishi"));

assert(greet("Oishi") === "Greetings Oishi", console.log("Oishi is properly greeted"));
assert(anotherGreet("Oishi") === "Greetings Oishi", console.log("Again, Oishi is properly greeted"));