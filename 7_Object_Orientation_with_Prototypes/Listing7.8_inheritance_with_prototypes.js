function Person() {}
Person.prototype.dance = function(){};
function Ninja() {}

Ninja.prototype = new Person(); // SubClass.prototype = new SuperClass()








const ninja = new Ninja();

console.log(typeof ninja.dance);
console.log(typeof Ninja); // function
console.log(typeof Ninja); // function
console.log(typeof Person); // function
console.log(ninja instanceof Ninja); // true
console.log(ninja instanceof Person); // true
console.log(ninja instanceof Object); // true
console.log(typeof ninja.dance); // function
