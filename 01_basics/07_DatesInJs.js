// Dates

let myDate=new Date();

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toISOString());

console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate=new Date(2025, 0, 26);

console.log(myCreatedDate.toDateString());

let myCreatedDate1=new Date(2025, 0, 26, 22, 51);

console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2=new Date("2025-01-26"); // YYYY-MM-DD

console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3=new Date("01-26-2025"); // MM-DD-YYYY Format

console.log(myCreatedDate3.toLocaleString());

let myTimeStamp=Date.now();

console.log(myTimeStamp); // mili second value of our date

console.log(myCreatedDate2.getTime());

console.log(Date.now()); // in mili seconds

console.log(Date.now()/1000); // in seconds

console.log(Math.floor(Date.now()/1000)); // to remove decimal from the value that we get in seconds

let newDate=new Date();

console.log(newDate.getMonth());

console.log(newDate.getDay());

console.log(myCreatedDate2.getMonth());

console.log(myCreatedDate2.getDay());

console.log(myCreatedDate2.getDate());

newDate.toLocaleString('default', {
  weekday: "long"
});