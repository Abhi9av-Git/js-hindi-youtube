// for of loop

const arr=[1, 2, 3, 4, 5];

for (const i of arr) { // no need to define length of array for (for of loop)
  
  console.log(i);
}

const greetings="Hello User!"; // String

for (const greet of greetings) {

  console.log(greet);
}

// Maps (holds unique values only)

const map=new Map();

map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("FR", "France");
map.set("USA", "United States Of America");

console.log(map);

for (const key of map) {

  console.log(key);
}

for (const [key, value] of map) {

  console.log(key, ":-", value);
}

const myObject={

  player1: "Messi",
  palyer2: "Ronaldo",
  player3: "Neymar",
  player4: "Palmer"
}

// for (const [key, value] of myObject) {

  // console.log(key, value);
// }

// so as we acn see above for of loop cannot be used for objects

