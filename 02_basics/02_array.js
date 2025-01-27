const marvel_heroes=["Spiderman", "Thor", "Captain America", "Ironman", "Hawkeye"];

const dc_heroes=["Superman", "Batman", "flash"];

marvel_heroes.push(dc_heroes); // whole array of dc heroes is pushed inside an array marvel_heroes

// console.log(marvel_heroes);

// console.log(marvel_heroes[5]);

// console.log(marvel_heroes[5][1]);

marvel_heroes.concat(dc_heroes); // same operation as line 5

// console.log(marvel_heroes); 

const all_new_heroes=[...marvel_heroes, ...dc_heroes]; // spread operation

console.log(all_new_heroes);

const another_array=[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array=another_array.flat(Infinity);  // if we have array inside array and to remove all such arrays inside and make them part of a single array use .flat(infinity); operation (in place of infinity you can provide depth but infinity is best to use)

console.log(real_another_array);

console.log(Array.isArray("Aditya"));

console.log(Array.from("Aditya"));

console.log(Array.from({name: "hitesh"})); // here you have to specify that whether you are creating array from keys or from values (if unable to specify, it will always return an empty array like in this case)

let score1=100;

let score2=200;

let score3=300;

console.log(Array.of(score1, score2, score3));