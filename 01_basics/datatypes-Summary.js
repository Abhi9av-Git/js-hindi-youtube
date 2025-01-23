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