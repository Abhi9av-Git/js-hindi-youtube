// array

const myArr=[0, 1, 2, 3, 4, 5];

const myHeroes=["Spiderman", "Captain America", "Thor", "Ironman", "Hawkeye"];

const myArr2=new Array(1, 2, 3, 4);

console.log(myArr[0]);

console.log(myArr[1]);

console.log(myHeroes[0]);

console.log(myHeroes[1]);

console.log(myHeroes[2]);

console.log(myHeroes[3]);

console.log(myHeroes[4]);

// Array methods

myArr.push(6);

myArr.push(7);

console.log(myArr[6]);

console.log(myArr);

console.log(myArr.length);

myArr.pop();

console.log(myArr);

console.log(myArr.length);

myArr.unshift(9); // adds the element at the start of the array and shifts other values to the right in Array

myArr.shift(); // removes starting element from the array and shifts all elements to the left of the array

console.log(myArr);

console.log(myArr.includes(9));

console.log(myArr.indexOf(9));

console.log(myArr.indexOf(5));

const newArr=myArr.join(); // Adds all the elements of an array into a string

console.log(newArr);

console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1=myArr.slice(1, 3); // index 3 is excluded

console.log(myn1);

console.log("B ", myArr);

const myn2=myArr.splice(1, 3); // splice includes index 3 and it also changes the original array and removes values fro index 1 to 3 from the original array

console.log("C ", myArr);

console.log(myn2);