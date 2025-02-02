const myNumbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums=myNumbers.map((num)=>num+10);

const newNums=myNumbers
              .map((num)=>num*10) // first the values of array are changed to 10, 20, 30, 40.... using .map()
              .map((num)=>num+1)  // now using another map 10, 20, 30, 40.... are converted into 11, 21, 31, 41....
              .filter((num)=>num>=40); // Now among 11, 21, 31, 41.... only values above 40 are to be selected

console.log(newNums);