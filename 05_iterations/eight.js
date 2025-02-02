const myNums=[1, 2, 3];

// const myTotal=myNums.reduce(function (accumulator, currentValue) {

  // console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
  // return accumulator+currentValue;

// }, 0); // where 0 is the initial value to start with

// now using arrow function instead of normal function

const myTotal=myNums.reduce((accumulator, currentValue)=>accumulator+currentValue, 0);

console.log(myTotal);

const shoppingCart=[
  {
    itemName: "js course",
    price:2999
  },
  {
    itemName: "py course",
    price:999
  },
  {
    itemName: "mobile dev course",
    price:5999
  },
  {
    itemName: "data science course",
    price:12999
  },
];

const priceSum=shoppingCart.reduce((accumulator, item)=>accumulator+item.price, 0);

console.log(priceSum);