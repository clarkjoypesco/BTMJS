// const cj = {
//   name: "CJ",
//   age: 30
// };

// console.log(cj);

// Person constructor
function Person(name, dob) {
  this.name = name;
  //   this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// const cj = new Person("CJ", 25);
// const john = new Person("John", 30);
// console.log(cj.age);

const cj = new Person("CJ", "12-8-1993");
console.log(cj.calculateAge());
