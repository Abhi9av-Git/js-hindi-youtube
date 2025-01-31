// if

const isUserLoggedin= true;

const temperature=41;

if (2=="2") {

  console.log("executed");
}

if (temperature<50) {

  console.log("less than 50");
}
else {

  console.log("temperature is greater than or equal to 50");
}

const score=200;

if (score>100) {

  const power="fly";
  console.log(`User power: ${power}`);
}

// to check the type also we use === i.e if (2==="2") , so they are not equal now

const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;

if (userLoggedIn && debitCard) {

  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {

  console.log("User logged in");
}
