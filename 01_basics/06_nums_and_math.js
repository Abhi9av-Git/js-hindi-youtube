const score=400;

console.log(score);

const balance=new Number(100); // using this we can use it as prototype i.e can use some inbuilt methods on it

console.log(balance);

console.log(balance.toString()); // now as we have converted into string so now we can use string methods like used in next line 

console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumber=23.8966;

console.log(otherNumber);

console.log(otherNumber.toPrecision(3)); // how precise you want your value

const hundreds=1000000;

console.log(hundreds.toLocaleString()); // this gives values according to US Standards

console.log(hundreds.toLocaleString('en-IN')); // this gives values according to Indian Number System

// **************** Maths **************

console.log(Math); // Math is a object itself

console.log(Math.abs(-4));

console.log(Math.round(1.2));

console.log(Math.round(1.5));

console.log(Math.round(1.6));

console.log(Math.ceil(4.2)); // gives always the next integer value

console.log(Math.floor(4.8)); // always give the integer value of that double number

console.log(Math.sqrt(49));

console.log(Math.pow(2, 4));

console.log(Math.min(4, 3, 6, 8));

console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // generates random values (always b/w 0 and 1)

console.log((Math.random()*10)+1); // to guarantee that value will always be greater than 0 (i.e minimum value will be 1 and all values will be in b/w 1 and 10 now)

console.log(Math.floor((Math.random()*10)+1));

const min=10;

const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);



