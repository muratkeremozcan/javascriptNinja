// argument[x] is a function alias: if you change the arguments object, the change is reflected in function parameter
"use strict"; // enable strict mode (disables function aliases, among other things...)
//  https://www.w3schools.com/js/js_strict.asp
var assert = require('assert');

function infiltrate(person) {
  assert(person === 'gardener', "The person is not a gardener"); // the person arg and the first arg start with the same value
  assert(arguments[0] === 'gardener', "The first argument is not a gardener");

  arguments[0] = 'ninja'; // this changes the fist argument

  assert(arguments[0] === 'ninja', "The first argument is now a ninja"); // first argument changed
  assert(person === 'gardener', "The person is not a gardener"); // the value of person parameter HAS NOT CHANGED because of STRICT MODE
}
infiltrate('gardener');



