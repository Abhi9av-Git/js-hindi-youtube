const user= {

  username: "Roshan",
  price: 999,

  welcomeMessage: function() {

    console.log(` ${this.username}, welcome to website`);
    
    console.log(this);
  }
}

user.welcomeMessage();

user.username="Sam";

user.welcomeMessage();

console.log(this);  // now the context is changed

// function chai() {

  // let username="Rishabh";
  // console.log(this.username);
// }

// chai();


// Arrow Function

const chai= ()=> {

  let username="Virat"

  console.log(this.username);
}

chai();

const addTwo=(num1, num2)=> {

  return num1+num2;
}

const req=addTwo(3, 4);

console.log(req);

// another way to write arrow function(is given below) but use it less

// const addTwo=(num1, num2)=> num1+num2; // no need to use return statement when not using '{}' brackets in arrow function

// const addTwo=(num1, num2)=> (num1+num2);


