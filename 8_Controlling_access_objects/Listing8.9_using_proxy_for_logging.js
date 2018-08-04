function makeLoggable(target) { // takes a target object and makes it loggable
  return new Proxy(target, {
    get: (target, property) => { // a get trap that logs property reads
      console.log('reading ' + property);
      return target[property];
    },
    set: (target, property, value) => { // a set trap that logs property writes
      console.log('writing value ' + value + 'to ' + property);
      target[property] = value;
    }
  });
}

let ninja = { name: "Yoshi" }; // an object to serve as the TARGET OBJECT of the proxy
ninja = makeLoggable(ninja);

console.log(ninja.name); // target.property

ninja.weapon = "katana";
console.log(ninja.weapon);