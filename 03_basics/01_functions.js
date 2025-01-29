function sayMyName() {

  console.log("A");
  console.log("D");
  console.log("I");
  console.log("T");
  console.log("Y");
  console.log("A");
}

// sayMyName();

function addTwoNumbers(number1, number2) { // no need to pass data types

  console.log(number1+number2);

}

addTwoNumbers(5, 4);

// addTwoNumbers(4, "5");

// addTwoNumbers(5, "a");

function multiplyTwoNumbers(number1, number2) {

  return number1*number2;
}

const result=multiplyTwoNumbers(5, 4);

console.log(result);

// console.log(multiplyTwoNumbers(1, 4));

function loginUserMessage(userName="Sam") {  // userName=Sam for default value (it will be used when username is not defined)

  if (userName==undefined) {

    console.log("please enter a username");

    return;
  }

  return `${userName} just logged in`;
}

const message=loginUserMessage("Aditya");

console.log(message);

console.log(loginUserMessage());

function calculateCartPrice(...num1) { // ... rest and spread operator

  return num1;

}

// const val=calculateCartPrice(200);

// console.log(val);

const val1=calculateCartPrice(200, 400, 500);

console.log(val1);

function cartPriceCalculator(val1, val2, ...num1) {

  return num1;

}

// console.log(cartPriceCalculator(200, 400, 500, 2000));

// Now how to pass an object in a function

const user={

  username: "Roshan",
  price: 199
}

function handleObject(anyobject) {

  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user);

// Now it is not necessary to create an object then pass it as a parameter
// another way is given below

handleObject({
  username: "sam",
  price: 199
});

// Now how to pass an array as a parameter

const myNewArray=[200, 400, 100, 600];

function returnSecondValue(getArray) {

  return getArray[1];

}

// const req=returnSecondValue(myNewArray);

// console.log(req);

const ans=returnSecondValue([200, 400, 100, 600]);

console.log(ans);

