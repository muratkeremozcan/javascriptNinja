class Ninja {
  constructor (name, level) {
    this.name = name;
    this.level = level;
  }
  swingSword() {
    return true;
  }
  static compare(ninja1, ninja2) { // STATIC METHOD
    return ninja1.level - ninja2.level;
  }
}

var ninja1 = new Ninja("Yoshi", 4);
var ninja2 = new Ninja("Hattori", 3);

console.log('compare' in ninja1); // IMPORTANT: object instances do not have access to static method
console.log('compare' in ninja2);
console.log(Ninja.compare(ninja1, ninja2)); // IMPORTANT: the class itself has access to the static method
console.log('swingSword' in Ninja); // IMPORTANT: the method is not accessible to the class, unless we have an instance of the class