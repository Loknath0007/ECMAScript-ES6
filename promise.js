/**

                                   ************************** Theory for Promise *********************************** 


                                    Promise is vary powerfull feature for handaling the asycronous request in javascript 
                                    Asyncronous is is single thread operation which will maintain the priority sequences 

                                    as we know the the flow of exucuting of the instruction statement in programming languages starts 
                                    from the top of the programe and execute line by line. 

                                    this is the nowmal or regular flow 

                                    however, asyncronous is the way for executing request based on the given priority 

                                    such as 

                                    if one function or statement is gien instruction to print the output after 2 second if the position of the
                                    particular instruction is at the first no matter the single thread agent will fetch the next instruction to 

                                    execute 

                                    when 2 second is over then it will start execute the insturction and then it will matain the sequence 

                                    as normal 

                                    the examples are given bellow for demostration of the promise 



 */

/*

console.log("Hello");

setTimeout(() => {
  console.log("I am timer");
}, 2000);

console.log("This is thrid mehtod");
*/
/**             
 

                        The outPut is as like bellow 
                        
                        Hello
                        This is third Method
                        I am timer 


                Although is the second instruction is witten at second position but the output is at the third position 
                That is called handling asyncronous request using promise in ES6

 */

/*

setTimeout(() => {
  console.log("I am Timer");
}, 5000);

console.log("This is second instruction");

console.log("This is  third instruction");

*/
console.log("************************ Promise Examples ************");

// To declare the promise we need to declare a variable and have to call promise such as new Promise
// Promise always takes two parameters such as resolve and reject

let myFirstPromise = new Promise((resolve, reject) => {
  let name = "Loknath";

  setTimeout(() => resolve(name), 10000);
});

console.log(myFirstPromise);

console.log("************************ Promise in Details ************");

/*

                    we do not make the promise form screch in the project 
                    we need to deal promise which is provided by third party software or server 
                    The data fetched by third pary software or server we need to handle those data by promise 

                    By default promise comes with two methods such as 
                    
                    then() and catch()

                    then() method is for check status resolve
                    if thee resolve status is more than one  then() method can be 
                    more than one. 
                    
                    and catch() method is used for check the err 
                    if anything error then it will execute and display catch() method


                    NOTE [we can not store asyncronise code into variables then it will be undefined or null]
 */

myFirstPromise
  .then(name => {
    console.log(`We are ${name}`);
  })

  .catch(err => {
    console.log(err);
  });

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(body => {
    body.map(data => {
      console.log(data.name);
    });
  })
  .catch(err => {
    console.log(err);
  });
