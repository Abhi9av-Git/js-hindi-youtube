const userEmail="r@roshan.ai";

if (userEmail) {

  console.log("Got user email");
}
else {

  console.log("Don't have user email");
}

// falsy values - false, 0, BigInt 0n, ""(empty string), undefined, NAN
// all other values other than above values are truthy values

// truthy values - "0", "false", " ", [] (empty array), {} (empty object), function () {} (empty function)

const emptyObj={};

if (Object.keys(emptyObj).length===0) {  // Object.keys() convert object into arrays

  console.log("object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;

// val1=5 ?? 10;

// val1=null ?? 10;

val1=null ?? 10 ?? 20;

const val2=undefined ?? 15;

console.log(val1);

console.log(val2);

// ternary Operator

// condition ? true : false;

const iceTeaPrice=100;

iceTeaPrice>=80 ? console.log("greater than or equal to 80") : console.log("less than 80");