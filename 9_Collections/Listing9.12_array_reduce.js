const numbers = [1, 2, 3, 4];

// REDUCE method:  inputArray.reduce((aggregated, number) => { ....},0)
const sum = numbers.reduce((aggregated, number) => { // REDUCE : a callback to each input array item, iterates, starts with initial value...
  return aggregated + number; // ... and applies the result of the previous callback on the next one
}, 0); // initial value

// crude way:
// const sum = 0;
// numbers.forEach( number => {
//   sum += number;
// });

console.log(sum);