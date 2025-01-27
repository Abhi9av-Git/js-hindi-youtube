// singleton 
// when an object is declared like literal then singleton is not formed
// when an object is declared using constructor then singleton is formed



// object literals 

const mySym=Symbol("key1");  // symbol is also kind of primitive data type
// now lets see how to enter this symbol in our object below and give it as output

const JsUser={
  name: "Aditya",
  "full name": "Aditya Karki",
  [mySym]: "mykey1",
  age: 19,
  location: "Pune",
  email: "Aditya@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
};

console.log(JsUser.email); // you can write this with . notation but you can't do it with "full name", so it is better to use next statement 

console.log(JsUser["email"]);

console.log(JsUser[mySym]);

JsUser.email="Aditya@chatgpt.com"; // to change the value of an attribute of an object

// Object.freeze(JsUser); // After this operation you cannot make any changes to your object

JsUser.email="Aditya@microsoft.com";

console.log(JsUser["email"]);

console.log(JsUser);

JsUser.greeting=function() {

  console.log("Hello Js User");
};

console.log(JsUser.greeting());

JsUser.greetingTwo= function(){

  console.log(`Hello Js User, ${JsUser["name"]}`);
};

// Another way to write above function is that instead of using object name you can use 'this' keyword

JsUser.greeting1=function() {

  console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greetingTwo());

console.log(JsUser.greeting1());

