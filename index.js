import Person from "./ClassES6";

import Student from "./classInharitance";

let p1 = new Person("Loknath", "0007loknath@gmail.com");

console.log(p1.name);
console.log(p1.print());

let studentDetail = new Student("Loknath", "0007loknath", "543434");

studentDetail.studentDetails();
