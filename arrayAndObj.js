// Destructuring array and Object Details

// De - Structure means break the structure such as object transform into variable

// and array transform into variables

// Destructuring arry

/*
const arr = [12, 23, 344];

// taking variable from array like previous methos

var a = arr[0];
var b = arr[1];

// Destructureing array in ES6

let [d, e, f] = arr;

console.log(d);
console.log(e);
console.log(f);

*/

// Destructuring object in ES6

const obj = {
  name: "loknath",
  email: "0007loknath@gmail.com"
};

// one way for destrucuring object

/*
let name = obj.name;
let email = obj.email;
console.log(name);
console.log(email);
*/

// Anothe wayof object destructuring and accessing as a variables

let { name, email } = obj;

/**   
console.log(name);
console.log(email);
  */
// accessing variables which is destructuring as a funciton perameter

function print({ name, email }) {
  console.log(
    `This is the name form object name obj and acessing name: ${name} and email: ${email}`
  );
}

print({ email, name });

// Pass object value as a perameter in the function

// Destructuring object ans pass throw arrow funciton perameter

let hello = ({ name, email }) => {
  console.log(`"This is pring using object as peremeter 
    name: ${name}, Email: ${email} "`);
};

hello({ email, name });
