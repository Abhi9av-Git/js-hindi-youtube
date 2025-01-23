let score="33"

console.log(typeof score);

let valueInNumber=Number(score)

console.log(typeof valueInNumber);

console.log(valueInNumber);

let ans=null

console.log(typeof ans);

let value=Number(ans)

console.log(typeof value);

console.log(value);

// after conversion of other datatypes to number 
// "33"=> 33
// "33abc"=> NaN
// true=>1; false=0;

let isLoggedIn=1

let booleanIsLoggedIn=Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// 1=>true; 0=>false;
// ""=>false
// "aditya"=>true

let someNumber=33

let stringNumber=String(someNumber)

console.log(typeof stringNumber);

console.log(stringNumber);

// ************** Operations ***********

let val=3;

let negVal=-val;

// console.log(negVal);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // 2 raise to the power 3
// console.log(2/3);
// console.log(2%3);

let str1="hello";

let str2=" Aditya";

let str3=str1+str2;

console.log(str3);

// Don't try to write codes like below four commented codes, its just for example
//console.log("1" +2);

//console.log(1+ "2");

//console.log("1"+ 2 +2); // if string is first then every one is treated as string

//console.log(1+ 2 +"2"); // if string is at last then operation is performed first and then converted into string

console.log(true); // gives true as output

console.log(+true); // gives 1 as output

let gameCounter=100;

gameCounter++;

console.log(gameCounter);

