const directory = new Map(); // phone directory to store each ninja's phone number

directory.set("Yoshi", "+81 26 6462"); 
directory.set("Kuma", "+81 52 2378 6462"); // map.set(key, {value})
directory.set("Hiro", "+81 76 277 46");
console.log(directory);

for (let item of directory){ // iteratore though each key-value pair in the map
  console.log(item);
}

console.log(directory.keys());

for (let key of directory.keys()){ // iterate through keys and values in the map
  console.log(key);
  console.log(directory.get(key));
}

console.log(directory.values());
for (let value of directory.values()){
  console.log(value);
  console.log(directory.get(value)); 
}
