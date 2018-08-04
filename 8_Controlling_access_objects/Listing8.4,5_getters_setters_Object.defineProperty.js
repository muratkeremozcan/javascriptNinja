function Ninja() {
  let _skillLevel = 0; // _private variable
  Object.defineProperty(this, 'skillLevel', { //  (object, 'property')
    get: () => { // get method is called whenever we read the property
      console.log('The get method is called');
      return _skillLevel;
    },
    set: value => { // set method is called whenever we assign a value to the property
      console.log('The set method is called');
      if(!Number.isInteger(value)){ // validate the passed in value .
        throw new TypeError('skill level should be a number');
      }
      _skillLevel = value;
    }
  });
}
const ninja =  new Ninja();

console.log(ninja._skillLevel); // undefined, private variable not accessible directly
console.log(typeof ninja.skillLevel); // but through the get method it can be accessed

ninja.skillLevel = 10; // to set, assign a value to the property, the setter accesses the private property
console.log(ninja.skillLevel);
try {
  ninja.skillLevel = "Great";
  console.log('should not be here');
} catch (e) {
  console.log('setting a non-integer value throws an exception');
}