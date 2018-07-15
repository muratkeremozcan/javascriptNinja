// var assert = require('assert');
// assert.throws(
//   function() {
//     throw new Error("Wrong value");
//   },
//   function(err) {
//     if ( (err instanceof Error) && /value/.test(err) ) {
//       return true;
//     }
//   },
//   "unexpected error"
// );
var assert = require('assert');

var text = "Domo arigato!";
console.log('Before defining functions'); // CALLED FIRST
function useless(ninjaCallback) { // a function that takes a callback function...
  console.log('in useless function');  // CALLED 3rd
  return ninjaCallback();// ... and immediately invokes it
}
function getText() { // a function that takes a global variable
  console.log('In getText function');  // CALLED 4th
  return text; // .. and returns the variable
}
console.log('Before making all the calls'); // CALLED SECOND

// call useless function with the getText function as a callback
assert(useless(getText) === text, console.log('The useless function works ' + text)); // node assert is different
console.log('After the calls have been made'); // last

/* to run: either in cmd> location of file, run' node Listing3.1.js '
 Node is recommended because it includes libraries like require
 assert works differently in Node and the browser: if the boolean condition is false, then it prints  the message, otherwise prints nothing
 so we use console.log if success, assert failure if error
 */