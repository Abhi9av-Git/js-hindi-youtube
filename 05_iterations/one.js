// for 

for (let index=0; index<10; index++) {

  if (index==5) {

    console.log("5 is the best number");
  }
  console.log(index);
}

// for (let i=0; i<10; i++) {

  // console.log(`outer loop value: ${i}`);

  // for (let j=0; j<10; j++) {

    // console.log(j);
  // }
//}

let myArray=["Spiderman", "Thor", "Batman"];

for (let i=0; i<myArray.length; i++) {

  console.log(myArray[i]);
}

// break and continue

for (let i=1; i<21; i++) {

  console.log(`value of i is ${i}`);

  if (i==5) {

    console.log("Detected 5");

    break;
  }
}

for (let i=1; i<21; i++) {

  if (i==5) {

    console.log("Detected 5");

    continue;
  }

  console.log(`value of i is ${i}`);
}