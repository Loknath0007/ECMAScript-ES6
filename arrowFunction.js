/* const demo = (name, title) => {
  console.log("This is " + name + title);
};

demo("Loknath", " Das"); */

/* const squ = (x, y) => x * y;

console.log(squ(10, 120)); */

/* function name() {
  console.log("this is name");
}

console.log(name);
 */

/* const demo = function(a) {
  console.log(a);
};
 */
/* const obj = {
  name: "Loknath Chandra Das",
  age: 25,
  email: "0007loknath@gmail.com",
  address: {
    streeth: "desa illmu",
    city: "Kota samarahan",
    postCode: 94300,
    state: "Sarawak"
  }
}; */

/* console.log(demo(obj)); */
/* 
console.log(obj); */

/* console.log(demo(obj, 55)); */
const obj = {
  name: "Loknath Chandra Das",
  age: 25,
  email: "0007loknath@gmail.com",

  print: () => {
    console.log(this.name);
  }
};

obj.print();
