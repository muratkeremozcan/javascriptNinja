function Ninja() {}
const ninjaOrg = new Ninja();

console.log(typeof Ninja); // function
console.log(typeof ninjaOrg); // object
console.log(ninjaOrg instanceof Ninja); // true

const ninja = new Ninja();
const ninja2 = new ninja.constructor(); // construct 2nd ninja  from the first

console.log(ninja2 instanceof Ninja); // new object is an instance of Ninja
console.log(ninja !== ninja2); // they are not the same object, but two distinct instances