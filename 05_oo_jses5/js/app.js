const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
};

const mary = Object.create(personPrototypes);

mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 30;
mary.getsMarried("Thompson");

console.log(mary);
console.log(mary.greeting());

const cj = Object.create(personPrototypes, {
  firstName: { value: "CJ" },
  lastName: { value: "Pesco" },
  age: { value: 36 }
});

console.log(cj);
console.log(cj.greeting());
