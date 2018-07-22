var assert = require('assert');

const GLOBAL_NINJA = "Yoshi"; // global variable, using CONST. Global const variables are usually written in uppercase

function reportActivity() {
  const functionActivity = "jumping"; // function local variable, using const

  for (let i = 1; i < 3; i++) {
    // IMPORTANT: within this scope, we have access to scope of function  reportActivity and global scope
    let forMessage = GLOBAL_NINJA + " " + functionActivity; // function local variables i and forMessage
    assert(forMessage === "Yoshi jumping", "error: Yoshi isn't jumping within the for block.");
    assert(i, "error: current loop counter doesn't exist");
    console.log(i);
  }
  // IMPORTANT: the variables of the for loop DECLARED WITH LET are NOT ACCESSIBLE OUTSIDE THE BLOCK
  // this is similar to other Object Oriented languages where variables are only in the scope of the BLOCK they are declared in
  assert(typeof i === "undefined", "error: loop variable declared with let are accessible outside of the loop");
  assert(typeof forMessage === "undefined", "error: loop variable declared with let are accessible outside of the loop");
  console.log("the inner variable i 's type is :", typeof i);
  console.log("the inner variable forMessage 's type is :", typeof forMessage);
}
reportActivity();

assert(typeof functionActivity === "undefined" && typeof i === "undefined" && typeof forMessage === "undefined",
  "error: variable functionActivity is not undefined");
console.log("\nthe inner variable functionActivity 's type is :", typeof functionActivity);
console.log("the inner variable i 's type is :", typeof i);
console.log("the inner variable forMessage 's type is :", typeof forMessage);