const name="Aditya";

const repoCount=50;

// console.log(name+repoCount+"Value"); Not good technique

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Another way to declare String
const gameName=new String("AdityaFC"); // using this we have key value pair i.e 0-A, 1-d, 2-i, 3-t, 4-y, 5-a and so on

console.log(gameName);

console.log(gameName[0]);

console.log(`Length of gameName is ${gameName.length}`);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('i'));

let myString=new String("Mumbai-FC");

console.log(myString);

const string1=myString.substring(0, 6); // index 6 will not be included

const string2=myString.substring(6, 9); // index 9 will not be included

console.log(string1);

console.log(string2);

const anotherString=myString.slice(-8, 4); // while using slice function we can give -ve values that will start from backwards of string

console.log(anotherString);

const newStringOne="  Aditya  ";

console.log(newStringOne);

console.log(newStringOne.trim());

const url="https://aditya.com/aditya%20karki";

console.log(url.replace('%20', '-')); // '%20' (first value) tells what is to be searched and '-' (second value) tells by which it is to be replaced

console.log(url.includes('aditya'));

const string3=new String("Mumbai-City-FC");

console.log(string3);

console.log(string3.split('-')); // will split string based on '-' (seperator)
// above statement gives array of seperated strings




