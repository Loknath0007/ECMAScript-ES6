import Person from "./ClassES6";

/**
                    When we want to inharit the class form the other file or folders then we need to impor the file 
                    where we want to inharit the classs 

                    inharitance always applicable by extends keywords 

                    such as 

                    the blue print of the inharitance is 

                    class className extends inharitanceClassName {
                        constructor(parameters){
                            super(name, email)
                            this. parameter = parameter;
                        }

                        print(){

                            super.print();
                            
                            console.log(`String can be anythind for accesssing the variables from the constructor
                            
                            we can use templete string for the variables such as ${parameterName} string ${parameterName}
                            
                            `)
                        }
                    }
 */

class Student extends Person {
  constructor(name, email, id) {
    super(name, email); // super method meaning that the constructor of the inharid or previous class
    this.id = id;
  }

  studentDetails() {
    super.print(); // so we can call the function or method of the previous class by using super.print()
    console.log(`Id = ${id}`);
  }
}

export default Student;
