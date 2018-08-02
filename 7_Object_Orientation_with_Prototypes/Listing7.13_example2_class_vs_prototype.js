// PROTOTYPE
function Warrior(weapon) {
  this.weapon = weapon;
}
Warrior.prototype.wield = function() {
  return "Wielding " + this.weapon;
}
Warrior.duel = function(warrior1, warrior2) {
  return warrior1.wield()  + ' vs ' + warrior2.wield();
};
var mustafaTheWarrior = new Warrior('araba');
console.log(mustafaTheWarrior.weapon);
console.log(mustafaTheWarrior.wield());


// CLASS
class WarriorClass {
  constructor(weapon) {
    this.weapon = weapon;
  }
  wield() {
    return "Wielding " + this.weapon;
  }
  static duel (warrior1, warrior2) {
    return warrior1.wield() + ' vs ' + warrior2.wield();
  }
}

var muratTheWarrior = new WarriorClass('sopa');
console.log(muratTheWarrior.weapon);
console.log(muratTheWarrior.wield());
console.log(WarriorClass.duel(muratTheWarrior, mustafaTheWarrior));
console.log(Warrior.duel(muratTheWarrior, mustafaTheWarrior));