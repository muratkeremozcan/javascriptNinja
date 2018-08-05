const ninjas = [{
    name: "Yagyu",
    weapon: "shuriken"
  },
  {
    name: "Yoshi",
    weapon: "katana"
  },
  {
    name: "Kuma",
    weapon: "wakizashi"
  }
];

// for (let i = 0; i < ninjas.length, i++;) // regular loop
ninjas.forEach(ninja => {
  console.log(ninja);
});

// SIMPLE EXTRACTION OF AN ARRAY FROM AN ARRAY
const ninjaNames = []; // create an empty array
ninjas.forEach(ninja => { // push each ninja weapon into the empty array
  ninjaNames.push(ninja.name);
});

console.log(ninjaNames);

// MAP method: inputArray.map
const weapons = ninjas.map( ninja => ninja.weapon ); // MAP applies a callback to each input array item, iterates and creates a new array with the return values
// const weapons = ninjas.map( ninja => { // multi-line version
//   return ninja.weapon;
// });
console.log(weapons);
