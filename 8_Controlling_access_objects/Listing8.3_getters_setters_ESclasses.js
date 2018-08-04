class NinjaCollection {
  constructor() {
    this.ninjas = ["Yoshi", "Kuma", "Hattori"];
  }
  get firstNinja() { // getter method, for first ninja
    console.log('getting firstNinja');
    return this.ninjas[0];
  }
  set firstNinja(value){ // setter method for ninja
    console.log('setting firstNinja');
    this.ninjas[0] = value;
  }
}
const ninjaCollection = new NinjaCollection();
console.log(ninjaCollection.firstNinja);

ninjaCollection.firstNinja = "Hachi";; // to set, assign a value to the property
console.log(ninjaCollection.firstNinja); // to get, call the property

