"use strict"; // function context (THIS) : UNDEFINED (in strict mode) , GLOBAL (in  non-strict mode)
var assert = require('assert');

////////////////////////////////////////////////////
// function DECLARATION and EXPRESSION have the same function context (THIS) WHEN INVOKING THE FUNCTION
////////////////////////////////////////////////////
function whatsMyContext() { // function DECLARATION
  return this; // if you do this in typescript, THIS is the function itself. In JS this can be global or undefined.
}
assert(whatsMyContext() === undefined, 'function call is not undefined'); // invoking the function as a FUNCTION, function context : UNDEFINED

var getMyThis = whatsMyContext; // getMyThis variable created, gets a reference to whatsMyContext function, NOT AN INSTANCE OF THE FUNCTION
assert(getMyThis() === undefined, 'function call is not undefined'); // invoking the function as a FUNCTION, function context : UNDEFINED

var whatsMyContextFunctionExpression = function (){ // function EXPRESSION
  return this;
};
assert(whatsMyContextFunctionExpression() === undefined, 'function call is not undefined'); // invoking the function as a FUNCTION, function context: UNDEFINED

////////////////////////////////////////////////////
// INVOKING FUNCTIONS AS METHODS ALLOWS US TO WRITE JS IN OBJECT ORIENTED MANNER, because the function context (THIS) belongs to the object the method got invoked at
////////////////////////////////////////////////////

var ninja1 = { // an object created with getMyThis property that references the whatsMyContext function
  getMyThis: whatsMyContext
};
assert(ninja1.getMyThis() === ninja1, 'function not working with ninja1'); // invoking the function as a METHOD, function context: NINJA1

var ninja2 = { // an object created with getMyThis property that references the whatsMyContext function
  getMyThis: whatsMyContext
};
assert(ninja2.getMyThis() === ninja2, 'function not working with ninja2'); // invoking the function as a METHOD, function context NINJA2