const ninjas = ["Kuma", "Hattori", "Yagyu"]; // create array using ARRAY LITERAL: []
const samurai = new Array("Oda", "Tomoe"); // create array using ARRAY CONSTRUCTOR
// using array literal is preferred because it is shorter :  []  vs  new Array( )

console.log(ninjas.length);
console.log(samurai.length);

console.log(ninjas[0]); // first item
console.log(samurai[samurai.length-1]); // last item

console.log(ninjas[3]);
console.log(samurai[2]);

ninjas[4] = "Ishi";
console.log(ninjas.length); // array length gets auto-extended
console.log(ninjas); // with a gap if needed

ninjas.length = 2;
console.log(ninjas); // array length gets auto-reduced
console.log(ninjas); // trimming the array

ninjas.length = 6;
console.log(ninjas);