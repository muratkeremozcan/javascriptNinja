const emperor = { name: "Komei"};
const representative = new Proxy(emperor, { // proxy constructor takes in the object it's the proxy for (emperor: TARGET OBJECT)
  get: (target, key) => { // get trap, for reading the object. If the target object has the property, return the property, if not return a message
    console.log('Reading ' + key + ' through a proxy');
    return key in target ? target[key]: "Don't bother the emperor!"; // target.key exists? if not 
    // if (key in target) {
    //   return target[key];
    // } else {
    //   "Don't bother the emperor";
    // }
  },
  set: (target, key, value) => { // set trap, for writing to the object
    console.log('Writing ' + key + ' through a proxy');
    target[key] = value;
  }
});

console.log(emperor.name); // target.key = Komei
console.log(representative.name); // target.key = Komei. We can get a property through proxy

console.log(emperor.nickname); // accessing a non-existing property returns undefined
console.log(representative.nickname); // the proxy jumps in when we make an invalid request

representative.nickname = "Tenno"; // target.key = "Tenno" . Adds a property through the proxy. The property is accessible universally
console.log(emperor.nickname); // undefined
console.log(representative.nickname); // the proxy jumps in when we make an invalid request

