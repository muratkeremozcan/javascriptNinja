var assert = require('assert');

function performAction(ninja, action = "skulking") {
  return ninja + " " + action;

}
assert(performAction("Fuma") === "Fuma skulking", console.log("The default value is used for Fuma"));
assert(performAction("Yagyu", "sneaking") === "Yagyu sneaking", console.log("Yagyu can do whatever he pleases, even sneak!"));