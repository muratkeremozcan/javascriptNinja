var assert = require('assert');

const ninjaPromise = new Promise( (resolve, reject) => { // new Promise constructor to which we pass a EXECUTOR function with parameters resolve and reject
  resolve ("Hattori"); // we can call resolve to resolve successfully
  reject("an error resolving a promise"); // we call reject if an error occurs
});

// we use the promise by calling the built-in THEN method, to which we pass 2 callback functions : a SUCCESS callback and a FAILURE callback
ninjaPromise.then( ninja => { // SUCCESS CALLBACK, called if resolved successfully
  console.log(ninja);
  assert(ninja === 'Hattori');
}, err => { // FAILURE CALLBACK, if error
  console.log('there was an error', err);
});