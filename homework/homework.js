/*
Hamster
attributes:

owner - string, initially set as an empty string
name - string, set the name from parameter in constructor method
price - integer, set as 15
methods:

wheelRun() - log "squeak squeak"
eatFood() - log "nibble nibble"
getPrice() - return the price
*/

class Hamster {
  constructor(name) {
    this.owner = "";
    this.name = name;
    this.price = 15;
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}
let theHamster = new Hamster("Hamtaro");
theHamster.wheelRun();
theHamster.eatFood();
console.log(theHamster.getPrice());

//Person

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = " ";
    this.bankAccount = 0;
    this.eatFood = 0;
  }
  //returns name
  getName() {
    return this.name;
  }
  //returns age
  getAge() {
    return this.age;
  }
  //returns weight
  getWeight() {
    return this.weight;
  }
  //logs a message with person's name
  greet() {
    console.log(`Hello, it's super nice to meet you! My name is ${this.name}.`);
  }
  //increment weight, increment mood
  eat() {
    this.weight++;
    this.mood++;
    this.eatFood++;
  }
  //decrement weight
  exercise() {
    this.weight--;
  }
  //increment age, increment height, increment weight, decrement mood, increment bank account by 10
  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }
  //push the hamster object on to the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
  buyHamster(hamster) {
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
  aHamsterNamedGus(hamsterName) {
    this.hamster = (hamsterName);
  }
  setGusOwner() {
    if (this.hamster && this.hamster.name === 'Gus') {
      this.hamster.owner = timmy.name;
    }
  }
  buyGus(hamsterName, price) {
    this.hamster = {name: hamsterName, owner: this.name, price: price};
  }
}
//Create a story with your Person Class

//Instantiate a new Person named Timmy
const timmy = new Person("Timmy")
timmy.greet();
//Age Timmy five years
for (let i = 0; i < 5; i++) {
  timmy.ageUp();
}
console.log("I am " + timmy.age + " years old");
//At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already.
//Have him eat five times.
for (let i = 0; i < 5; i++) {
  timmy.eat();
}
console.log("I eat " + timmy.eatFood + " times a day.");
//Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good.
//Have him exercise five times
for (let i = 0; i < 5; i++) {
  timmy.weight -= -10;
}
console.log("After exercing every day, I am now " + timmy.weight + " pounds.");
//Age Timmy 9 years
timmy.age += 9;
console.log("I am " + timmy.age + " years old");
//Create a hamster named "Gus";
timmy.aHamsterNamedGus("Gus");
console.log("The hamster's name is " + timmy.hamster)
//Set Gus's owner to the string "Timmy"
timmy.setGusOwner("Timmy");
console.log(timmy.hamster + "'s owner is " + timmy.name);
//Have Timmy "buy" Gus
timmy.buyGus("Gus", 60);
console.log(timmy.name + " bought " + timmy.hamster.name + " for " + '$' + timmy.hamster.price + '.')
//Age Timmy 15 years
timmy.age += 15;
console.log("15 years have passed by, " + timmy.name + " is now " + timmy.age + " years old.")
//Have Timmy eat twice
timmy.eat();
timmy.eat();
console.log(timmy.name + " now eats twice a day ");
//Have Timmy exercise twice
timmy.exercise()
timmy.exercise()
console.log(timmy.name + " now exercises twice a day");
/*
class Timmy { 
  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.hamster = " ";
    this.eatFood = 0
  }
  eat() {
    this.eatFood += 1;
  }
  exercise() {
    this.weight -= 5;
  }
  aHamsterNamedGus(hamsterName) {
    this.hamster = (hamsterName);
  }
  setGusOwner() {
    if (this.hamster && this.hamster.name === 'Gus') {
      this.hamster.owner = timmy.name;
    }
  }
  buyGus(hamsterName, price) {
    this.hamster = {name: hamsterName, owner: this.name, price: price};
  }
} //Age Timmy five years
const timmy = new Timmy("Timmy", 5, 70);
timmy.age == 5;
console.log("Hello my name is " + timmy.name + '.');
console.log("I am " + timmy.age + " years old");
//At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
for (let i = 0; i < 5; i++) {
  timmy.eat();
}
console.log("I eat " + timmy.eatFood + " times a day." );

//Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
for (let i = 0; i < 5; i++) {
  timmy.exercise()
}
console.log("After exercing every day, I am now " + timmy.weight + " pounds.");
//Age Timmy 9 years
timmy.age += 9;
console.log("9 years have passed by, I am now " + timmy.age + " years old.")
//Create a hamster named "Gus"
timmy.aHamsterNamedGus("Gus");
console.log(timmy.name + " has a hamster named " + timmy.hamster + ".")
// Set Gus's owner to "Timmy"
timmy.setGusOwner("Timmy");
console.log("Gus's owner is " + timmy.name);
//Have Timmy "buy" Gus
timmy.buyGus("Gus", 60);
console.log(timmy.name + " bought " + timmy.hamster.name + " for " + '$' + timmy.hamster.price + '.')
//Age Timmy 15 years
timmy.age += 15;
console.log("15 years have passed by, I am now " + timmy.age + " years old.")
//Have Timmy eat twice
timmy.eat();
timmy.eat();
console.log(timmy.name + " now eats twice a day ")
//Have Timmy exercise twice
timmy.exercise()
timmy.exercise()

*/