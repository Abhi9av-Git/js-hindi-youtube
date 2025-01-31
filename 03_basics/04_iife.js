// IIFE (Immediately invoked Function Expressions)

// function chai() {

  // console.log(`DB CONNECTED`);
// }

// chai();

// now if we want to immediately invoke this above function

// named iife bcz it has name
(function chai() {

  console.log(`DB CONNECTED`);
})();  // first parenthesis is used to define the function and second parenthesis is used to call the function

// Now declare arrow function same as above

// simple iffe

(()=> {

  console.log(`DB CONNECTED TWO`);
})();

((name)=> {

  console.log(`DB CONNECTED TWO ${name}`);
})("Roshan");

