const coding=["js", "cpp", "java", "py", "rb"];

coding.forEach(  function (item) {  // here no need to give function name bcz it's a callback function

  console.log(item);
});

console.log(`****************`);

coding.forEach( (item)=> {

  console.log(item);
});

function printMe(item) {

  console.log(item);
};

console.log(`****************`);

coding.forEach(printMe);

console.log(`****************`);

coding.forEach( (item, index, arr)=> {

  console.log(item, index, arr);

});

console.log(`****************`);

// Array of objects

const myCoding=[
  {
    languageName: "javascript",
    languageFileName: "js"
  },
  {
    languageName: "C++",
    languageFileName: "cpp"
  },
  {
    languageName: "Java",
    languageFileName: "Java"
  }
];

myCoding.forEach( (item)=> {

  console.log(item.languageName);
})