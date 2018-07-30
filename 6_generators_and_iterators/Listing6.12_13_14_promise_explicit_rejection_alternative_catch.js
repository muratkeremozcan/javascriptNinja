const promiseExplicitReject = new Promise( (resolve, reject) => {
  reject('Explicitly reject a promise');
});

promiseExplicitReject.then( () => {
  console.log('will not be called, no success');
}, error =>  {
  console.log('the promise was explicitly rejected');
});

// CHAINING CATCH
const promiseExplicitRejectWithCatch = new Promise( (resolve, reject) => { // alternative syntax for handling promise rejection
  reject('Explicitly reject a promise');
});
// we can chain in the catch method after the then method to also provide an error callback
promiseExplicitRejectWithCatch.then( () => {
  console.log('will not be called, no success');
}).catch( () => {
  console.log('Alternative syntax with CATCH. the promise was explicitly rejected');
});

// IMPLICITLY REJECT
const promiseImplicitReject = new Promise ( (resolve, reject) => {
  undeclaredVariable++; // this variable is not defined, will throw implicit
});
promiseImplicitReject.then( () => {
  console.log('happy path will not be reached');
}).catch( () => {
  console.log('Implicit promise rejected');
});
// alternative syntax
// promiseImplicitReject.then( () => {
//   console.log('happy path will not be reached');
// }, error => {
//   console.log('Implicit promise rejected');
// });