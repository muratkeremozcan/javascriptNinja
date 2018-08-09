const ninjaIslandMap = new Map(); // MAP CONSTRUCTOR to create a map

const ninja1 = {name: "Yoshi"}; // 3 objects to use as KEYs
const ninja2 = {name: "Hattori"};
const ninja3 = {name: "Kuma"};

ninjaIslandMap.set(ninja1, { homeIsland: "Honshu"} ); // MAP.SET(KEY, {VALUE}) method for creating key-value pairs
ninjaIslandMap.set(ninja2, { homeIsland: "Hokkaido"} ); // map.set(key, {value})
ninjaIslandMap.set(ninja2, { homeIsland: "Bokkadio"} ); // KEY overwrites

console.log(ninjaIslandMap); // Map { {key => value}, {key => value} }
console.log(ninjaIslandMap.size); // MAP.SIZE method to get the map size...
console.log(ninjaIslandMap.has(ninja1)); // MAP.HAS(KEY)  to check if a map for a key Sexists
console.log(ninjaIslandMap.has(ninja2)); // map.has(key) to check if a map exists
console.log(ninjaIslandMap.has(ninja3)); // 3rd key-value pair has not been set, false

console.log(ninjaIslandMap.get(ninja1)); // MAP.GET(KEY) to get the value (obtain the mapping)
console.log(ninjaIslandMap.get(ninja2));
console.log(ninjaIslandMap.get(ninja3)); // no 3rd key-value pair, undefined

ninjaIslandMap.delete(ninja1); // MAP.DELETE(KEY)
console.log(ninjaIslandMap); // Map { {key => value}, {key => value} }
console.log(ninjaIslandMap.size); // MAP.SIZE method to get the map size...
console.log(ninjaIslandMap.has(ninja1)); // has been deleted
console.log(ninjaIslandMap.has(ninja2)); // MAP.HAS method: map.has(key)
console.log(ninjaIslandMap.has(ninja3)); // 3rd key-value pair has not been set, false

console.log(ninjaIslandMap.get(ninja1)); // has been deleted
console.log(ninjaIslandMap.get(ninja2));
console.log(ninjaIslandMap.get(ninja3)); // no 3rd key-value pair, undefined

ninjaIslandMap.clear(); // MAP.CLEAR()
console.log(ninjaIslandMap);
console.log(ninjaIslandMap.size);
console.log(ninjaIslandMap.has(ninja1)); // has been cleared
console.log(ninjaIslandMap.has(ninja2));
console.log(ninjaIslandMap.has(ninja3));

console.log(ninjaIslandMap.get(ninja1));
console.log(ninjaIslandMap.get(ninja2));
console.log(ninjaIslandMap.get(ninja3));
