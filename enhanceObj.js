let name = "Loknath";
let email = "0007loknath@gmail.com";

// Privious version of ES6

/*

const es5 = {
  name: name,
  email: email,
  print: function() {
    console.log(this.name, this.email);
  }
};

es5.print();

*/

// ES6 featues [we can shortend the property and the value of the variable and the funciton]

const es6 = {
  name,
  email,
  print() {
    console.log(this.name, this.email);
  }
};

es6.print();

console.dir(es6);
