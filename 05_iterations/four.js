const myObject={

  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple"
}

// for iterating objects for in loops are used

for (const key in myObject) {

  console.log(`the value of key is ${key} and its value is ${myObject[key]}`);
}

const programming=["js", "cpp", "py", "java", "rb"];

for (const key in programming) {

  console.log(programming[key]);
}

// Maps are not iteratable using for in loop