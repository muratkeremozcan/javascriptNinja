// PROTOTYPE
function Ninja(name) {
  this.name = name;
}
Ninja.prototype.swingSword = function() {
  return true;
};
var ninja = new Ninja("Yoshi");
console.log(ninja.name);
console.log(ninja.swingSword);

// CLASS
class NinjaClass {
  constructor(name) {
    this.name = name;
  }
  swingSword() {
    return true;
  }
}
var ninjaClass = new NinjaClass("Yoshi in Class");
console.log(ninja.name);
console.log(ninja.swingSword);