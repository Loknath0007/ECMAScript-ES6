// Default parameter

console.log(
  "/************************ Default Operator ***********************************/"
);

let sqr = (a, b = a) => {
  return a * b;
}; // if we do not initialized the value of the seconse parameter then it will take return null
// so we have to initalized the value of the second parameter such as b =a, or b = 1;
console.log(sqr(10));

// Rest operator

// Rest Operator means triple dot [...] it also menas the applicable for the spread operator

// such as Spread operator = [...]

// ******   Rest operator  *************

// Rest Operator menaing is Transforming regular variables into arry it can be pass by function parameter
// Examples

console.log(
  "/************************ Rest Operator ***********************************/"
);

function demo(...num) {
  let name = num; // here we store the number pass throw funciton parameter in a variable called name and then we print the variable
  console.log(name);
}

demo(12, 23, 56); // Out put will be [12,23,56], it can be how many numbers we pass throgh parameter it will sote as an array

/* -------------------------------------Add fuction uding rest operator--------------------------------------- */

function add(...num) {
  return num.reduce((a, b) => a + b);
}

console.log(add(12, 34, 556, 777));

/********************************************Spread Operato**************************** */

console.log(
  "/************************ Spread Operator ***********************************/"
);

/*

                               ------------------Theory--------------------

                               Spread Operator will destructure the arr and object into normal values 

                               the example is given bellow 

*/

console.log("/-------------Spread Operator for Array -----------------/");

const arr = [12, 23, 45, 78];

console.log(`This is the output of the array: ${arr}`);

console.log(
  "This is the output of the array after distructuring using Spread Operator:"
);

console.log(...arr);

console.log("/-------------Spread Operator for Object -----------------/");

const obj1 = {
  name: "Loknaht",
  email: "0007loknath@gmail.com"
};

const obj2 = {
  ...obj1,
  name: "another name",

  age: 26
};

/*

// if we Spread the object using spread operator and if we assign the new value for the same property of the previous object
then it will overwrite with new value 


    We also can add new propoerty and new methor in second object after initializing the first object as a Spread Operator 
    

*/

console.log(obj2);
