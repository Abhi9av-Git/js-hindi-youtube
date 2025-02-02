// const coding=["js", "cpp", "java", "python", "ruby"];

// const values=coding.forEach((item)=> {

  // console.log(item);

// });

// console.log(values);

const myNums=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums=myNums.filter((num)=>{

  // return num>4;
// }); // filter is also a callback function

const newNums=[];

myNums.forEach((num)=>{

  if (num>4) {

    newNums.push(num);
  }
});

console.log(newNums);

const books=[
  {title: "book1", genre: "Fiction", publish: "1987", edition:"2010"},
  {title: "book2", genre: "Fiction", publish: "2011", edition:"2016"},
  {title: "book3", genre: "History", publish: "1986", edition:"1996"},
  {title: "book4", genre: "Non-Fiction", publish: "1981", edition:"1989"},
  {title: "book5", genre: "Fiction", publish: "1990", edition:"2000"},
  {title: "book6", genre: "Science", publish: "2000", edition:"2024"}
];

const userBooks=books.filter((item)=>item.genre==="Fiction" && item.publish>="2000");

console.log(userBooks);