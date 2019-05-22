//PRIMITIVE

//String
const name = "John Doe";
console.log(typeof name);

//Number
const age = 45;
console.log(typeof age);

//Boolean
const hasKids = false;
console.log(typeof hasKids);

//Null
//Null is a bug return object
const car = null;
console.log(typeof car);

//undefined
let test;
console.log(typeof test);

//Symbol
const sym = Symbol();
console.log(typeof sym);

//REFERENCE Types - All comeback as Objects

//Array
const hobbies = ["movies", "music"];
console.log(typeof hobbies);

//Object literal
const address = {
  city: "Maasin",
  state: "SL"
};
console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today);
