var assert = require('assert');

console.log("At code start");

var ninjaDelayedPromise = new Promise( (resolve, reject) => {
  console.log('ninjaDelayedPromise executor');
  setTimeout( () => { // promise set to resolve when timeout expires
    console.log('Resolving NinjaDelayedPromise');
    resolve('Hattori');
  }, 5000);
});
ninjaDelayedPromise.then( ninja => { // success callback called if we resolved successfully
  assert(ninja === 'Hattori');
  console.log(ninja);
});

const ninjaImmediatePromise = new Promise ( (resolve, reject) => {  // promise constructor withe EXECUTOR function passed in , with param reolvve and reject
  console.log('ninjaImmediatePromise executor, immediate resolve');
  resolve('Yoshi'); // promise immediately resolved
});
// we use the promise by calling the built-in THEN method, to which we pass 2 callback functions : a SUCCESS callback and a FAILURE callback
ninjaImmediatePromise.then ( ninja => { // SUCCESS CALLBACK, called if resolved successfully
  console.log(ninja);
}, err => { // FAILURE CALLBACK, if error
  console.log(err);
});