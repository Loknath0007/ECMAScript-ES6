//import * as anyname from "./moduleSystem1";

//console.log(
//"/************************ Module System using [*] for importing all modules form different files ***********************************/"
//);
//console.log(anyname);

//console.log(anyname.add(12, 34)); // It will pass the values as a parameter by add() function and return will be made by moduleSystem1.js file

/**
 
            it will return the object of moduleSytem1.js files and the object properties will be store in the object 
            name anyname and we also can acces the method of the moduleSystem1.js file by writing anyname.method name

            such as anyname.add 
            

            ->>>>>  import * as anyname from "./moduleSystem1" is used for imporing form anothoer files for all method and 
            property 





 */

console.log(
  "****************************************************************************************"
);

/**
  
        For importing the specific methods and property form another files 



  */

import { add, sum } from "./moduleSystem1";

console.log(add);

console.log(add(34, 34));

/**
 
        It will return the add result calculating from the moduleSystem1.js file 
        the rules is importing specific method, have to initialized the method name in the Carly braces  after import 
        at the top of the files is better 
        



 */
