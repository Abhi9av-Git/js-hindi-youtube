// declaration of an object using constructor (singleton)

// const tinderUser={}; another way to declare empty object
const tinderUser=new Object();

tinderUser.id="123abc";
tinderUser.name="Sammy";
tinderUser.isLoggedIn=false;

console.log(tinderUser);

const regularUser={

  email:"some@gmail.com",
  fullname: {

    userFullname: {
      firstName: "Roshan",
      lastName: "Shelke"
    }
  }
}

console.log(regularUser.fullname.userFullname.firstName);

const obj1={1: "a", 2: "b"};

const obj2={3: "a", 4: "b"};

// const obj3={obj1, obj2};

// const obj3=Object.assign({}, obj1, obj2); // to merge two objects ({} empty object must be included)

const obj3={...obj1, ...obj2}; // spread method

console.log(obj3);

// Array of objects

const users=[

  {

    id:1,
    email:"Aditya@accenture.com"
  },
  {

    id:1,
    email:"Aditya@accenture.com"
  }
];

users[1].email;

console.log(tinderUser);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={

  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Rishabh"
}

const {courseInstructor}=course; // i.e extract value of courseInstructor from course

console.log(courseInstructor); // now if you find courseInstructor as a very big name you can also follow next two statements to print courseInstructor from course object

const {courseInstructor: instructor}=course;

console.log(instructor);

// JSON

// {

  // "name":"Aditya",
  // "coursename":"js in hindi",
  // "price": "free"
// };

[

  {},
  {},
  {}
]