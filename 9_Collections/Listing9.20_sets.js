/*
Set is an UNORDERED collection of UNIQUE objects, doesn't allow DUPLICATES, while Map provides a data structure based on KEY_VALUE pairs
*/
const ninjas = new Set(["Kuma", "Hattori", "Yagyu", "Hattori"]); // Set constructor can take an array of items with which the set is initialized

console.log(ninjas.has("Hattori"));
console.log(ninjas.size); // 3 , discards any duplicate items
console.log(ninjas);

console.log(ninjas.has("Yoshi"));
ninjas.add("Yoshi");
console.log(ninjas.size); // you can add new items that aren't already contained in the set
console.log(ninjas);

ninjas.add("Kuma");
console.log(ninjas.size); // adding duplicate items has no effect
console.log(ninjas);

for (let ninja of ninjas) { // like maps and arrays, sets are collections so we can iterate over them
  console.log(ninja); // items are iterated in the order in which they were inserted to the Set
}