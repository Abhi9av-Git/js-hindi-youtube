// Javascript is dynamically typed language

// # Primitive data Types

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score=100;

const scoreValue=100.3;

const isLoggedIn=false;

const outsideTemp=null;

let userEmail;  // undefined

const id=Symbol('123');

const anotherId=Symbol('123');

console.log(id===anotherId);

const bigNumber=3768528n;

// Reference (Non Primitive Data types)

// Array, Objects, Functions

const heroes=["Spiderman", "Captain America", "Thor", "Iron Man"];
let myObj = {
  name: "Aditya",
  age: 22,
}

const myFunction= function(){
  console.log("Hello World");
}

console.log(typeof bigNumber);

// *****************

// There are two memories- Stack and Heap Memory

// stack(Primitive), Heap is used with Non Primitive datatypes

let myYoutubename="Adityadotcom";

let anothername=myYoutubename;

anothername="chaiaurcode";

console.log(myYoutubename);

console.log(anothername);

// heap memory
let userOne={

  email: "usergoogle.com",
  upi: "user@ybl"
}

let userTwo=userOne;

userTwo.email="hitesh@google.com";

console.log(userOne.email);

console.log(userTwo.email);