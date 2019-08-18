class Person {
  //let name = "name"; // Thsi is invalid syntex because in ES6 class property or variables can not declar directly

  /*
    
                So inorder to declare the variables or property inside the calss we need to make constractor 
                inside the constractore we can declare the property or variables as much as we want 
                the example is given bellow 

    
    */

  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  print() {
    console.log(`Name = ${name} Email = ${email}`);
  }
}

export default Person;
