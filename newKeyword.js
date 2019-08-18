function Animal(name) {
  this.name = name;
}

Animal.prototype.printName = function() {
  console.log(this.name);
};

let cat = new Animal("Vikey");

let dog = new Animal("Bunky");

cat.printName();

console.log(cat);
