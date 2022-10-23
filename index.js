document.write(
  '<h3><strong>Map Reduce and Filter - Array Methods</strong></h3>'
);
document.write('Map');
//Syntax
// let arr
// let newArray = arr.map(function(element, index, array){
//     return something
// },[])

//Usage: General HTML Tags during Product Cards Usage
let numArray = [1, 2, 3, 4, 5];
let multiplyArrayElem = numArray.map((elem) => elem * 2);
document.write('numArray : ' + numArray);
document.write(
  '<br>' + 'Result of numArray multiplied by 2: ' + multiplyArrayElem
);

//Usage: In website filtering of the products
document.write('<br>' + 'Filter');
let evenArray = numArray.filter((item) => item % 2 === 0);
document.write('<br>' + 'numArray : ' + numArray);
document.write(
  '<br>' + 'Result of numArray with even numbers: ' + evenArray + '<br>'
);

const students = [
  {name: 'Ram', marks: 95},
  {name: 'Shyam', marks: 70},
  {name: 'Srinivas', marks: 85},
  {name: 'Isvita', marks: 87},
  {name: 'Saloni', marks: 99},
];

const distinctionGrade = students.filter((abc) => abc.marks >= 90);
document.write('<h4>Original Student Array: </h4>');
students.map((elem) => document.write('<br>' + elem.name + ': ' + elem.marks));

document.write('<h4>Distinction Students Array: </h4>');
distinctionGrade.map((elem) =>
  document.write('<br>' + elem.name + ': ' + elem.marks)
);

//Reduce
//Example: sum is the initial variable, elem is each number in the array, 0 is initial value of sum variable
document.write('<p><strong>Reduce </strong></p>');
let newNumArray = [1, 2, 3, 4, 5, 6, 7];
let sumArray = newNumArray.reduce(function (sum, elem) {
  return sum + elem;
}, 0);

document.write('<br>' + 'Sum of numbers using Reduce Method: ' + sumArray);
document.write('<p><strong>Try Catch </strong></p>');

// try {
//   alert('This is try catch block');
//   abcayxnnnnnn;
// } catch (e) {
//   alert('An error occured inside try block: ' + e);
// }

//Callback and Promises
document.write('<h3><strong>Callback</strong></h3>');

//Call back function

//A function will be passed to another function as an argument
// function greet(name) {
//   alert(`Hello, ${name}`); //back ticks are called as template literals
// }

// function processUserInput(callback) {
//   const name = prompt('Please enter your name: ');
//   callback(name);
// }

// processUserInput(greet);
//Calling Functions Independently
function myPrint(msg) {
  document.getElementById('test1').innerHTML = msg;
}

function myCalc(n1, n2) {
  return n1 + n2;
}

let result = myCalc(10, 15);
myPrint(result);

//Calling Function within another function
function myPrint1(msg) {
  document.getElementById('test2').innerHTML = msg;
}

function myCalc1(n1, n2) {
  let sum = n1 + n2;
  myPrint1(sum);
}

myCalc1(15, 25);

//Calling functions using callback
function myPrint2(msg) {
  document.getElementById('test3').innerHTML = msg;
}

function myCalc2(n1, n2, someFunc) {
  let sum = n1 + n2;
  someFunc(sum);
}
myCalc2(10, 20, myPrint2);

document.write('<h3><strong>Promises</strong></h3>');
//states: pending, fullfilled or rejected
//result: undefined, value (when resolved), error (when rejected)
let promise = new Promise(function (resolve, reject) {
  resolve(); //fullfilled
  reject(); //rejected
});

let myPromise = new Promise(function (right, wrong) {
  const myProduct = 'Apple 13';
  const deliveredProduct = 'Apple 11';
  if (myProduct === deliveredProduct) {
    right();
  } else {
    wrong();
  }
});

myPromise
  .then(function () {
    console.log('Right Product Delivered');
  })
  .catch(function () {
    console.log('Sorry. Some thing went wrong');
  });

let myPromise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('Work done!'), 5000);
});

myPromise2.then(
  (result) => console.log(result),
  (error) => console.log(error)
);

//Promise chain
let myPromise3 = new Promise((resolve, reject) => {
  resolve('I am block 1');
});

myPromise3
  .then(
    new Promise((resolve, reject) => {
      resolve('I am block 1a. My work is done');
    }).then((result1) => {
      console.log(result1);
    })
  )
  .then((result2) => {
    console.log(result2);
  });

//Async/Await
//Giving some work to a program. Program says I will finish whenever possible and report back
//Async functions are a higher level abstraction over promises.
document.write('<p><strong>Async/Await</strong></p>');
async function test1() {
  return 'This is an async function';
}

// test1().then((result) => {
//   document.write('Inside an async function: ' + result);
// });

// async function test2() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('My work is done!'), 2000);
//   });
//   let result = await promise;
//   alert(result);
// }

// test2();

//Fetch
document.write('<p><strong>Fetch</strong></p>');
let url = 'https://restcountries.com/v3.1/all';
async function fecthFunction(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
}

fecthFunction(url);

//Difference between object format and json format
// obj = {firsName: "John", age: 25}, json = {"firstName":"John","age","25"}

//Scope and Hoisting
document.write('<p><strong>Scope and Hoisting</strong></p>');
//Scope: Local and Global
//Hoisting: All global variable declarations made across the program will go to the beginning of the execution and memory allocated

//Classes
document.write('<p><strong>Classes</strong></p>');
//Syntax of the class
class myClassName {
  constructor() {}
}

//In Java Script Class is Template for the Object. But class is not an object
class Car {
  constructor(name, year, color) {
    this.name = name;
    this.year = year;
    this.color = color;
  }
}

let myCar1 = new Car('Swift', 2020, 'Blue');
let myCar2 = new Car('Avenue', 2021, 'Red');
console.log(myCar1);
console.log(myCar2);

//Class Inheritance
class Model extends Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  model() {
    return this.model;
  }

  brand() {
    return this.brand;
  }
}

//Class Getters and Setters
class Car1 {
  constructor(brand) {
    this.carname = brand;
  }
  get cname() {
    return this.carname;
  }

  set cname(string) {
    this.carname = string;
  }
}

let myCar5 = new Car1('Ford');
console.log(myCar5);
document.write('<br>' + myCar5.cname + '<br>');

//Area of Rectangle
class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }

  //Getter
  get area() {
    return this.calcArea();
  }

  //Method
  calcArea() {
    return this.length * this.breadth;
  }
}

let myRectangle = new Rectangle(15, 8);
console.log(myRectangle.area);

//Object destructuring
document.write('<h3>Object Destructuring</h3>');
let person = {
  firstName: 'John',
  lastName: 'Doe',
};

let myFname = person.firstName;
let myLname = person.lastName;
document.write('<br>' + myFname + ' ' + myLname + '<br>');

let {first: fname, lastName: lname} = person;

let person1 = {
  firstName: 'John',
  lastName: 'Doe',
  currentAge: 28,
};

let {firstName, lastName, middleName = 'XYZ', currentAge: age = 18} = person1;
document.write('<br>' + middleName + '<br>');
document.write('<br>' + age + '<br>');

//Destructe a nested object
let employee = {
  id: 1001,
  name: {
    firstName: 'John',
    lastName: 'Doe',
  },
};

let {
  name: {myFirstName, myLastName},
  name,
} = employee;

console.log(name);

//Rest Operator
function sum(a, b) {
  return a + b;
}

// alert(sum(1, 2, 3, 4, 5));
function sumAll(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
document.write(
  '<br>' + 'Sum of 1,2,3,4,5 is: ' + sumAll(1, 2, 3, 4, 5) + '<br>'
);

document.write('<br>' + 'Sum of 1,2,3 is: ' + sumAll(1, 2, 3) + '<br>');

function userObj(firstName, lastName, ...titles) {
  document.write('<br>' + 'First Name: ' + firstName + '<br>');
  document.write('<br>' + 'Last Name: ' + lastName + '<br>');
  document.write('<br>' + 'Titles: ' + titles[0] + ',' + titles[1] + '<br>');
}

userObj('John', 'Doe', 'King', 'Painter', 'Musician');

//Spread Operator
//Convert Array into Elements
// alert('With individual number: ' + Math.max(7, 6, 9));
let arr = [7, 6, 9];
// alert('With Entire Array: ' + Math.max(arr));
// alert('With array reading: ' + Math.max(arr[0], arr[1], arr[2]));
let arr1 = [7, 6, 9, 19, 27];
// alert('With Spread Operator: ' + Math.max(...arr1));
let arr2 = [5, -7, 8, -2, 51];

// alert('With Spread Operator and 2 arrays: ' + Math.max(...arr1, ...arr2));

//Convert String into array of elements
let str = 'Hello World';
// alert([...str]);
console.log('Using Spread Operate [...str]: ' + [...str]);
// alert(Array.from(str));
console.log('Using Array.from(...str): ' + Array.from(str));

//Spread operator can also be used to create a copy an object
let arrXYZ = [9, 8, 7];
console.log('Original Array arrXYZ: ' + arrXYZ);
let arrXYZCopy = [...arrXYZ];
console.log('Copy of Array arrXYZ: ' + arrXYZCopy);

//Object Accessors, Constructors, Prototypes
//Accessors: getter and setter
const person10 = {
  firstName: 'John',
  lastName: 'Does',
  language: 'en',
  get lang() {
    return this.language;
  },
};

console.log('Langauge from Person10 object: ' + person10.language);

//Setter
const person11 = {
  firstName: 'John',
  lastName: 'Does',
  language: '',
  set lang(lng) {
    this.language = lng;
  },
};
person11.lang = 'en-us';
console.log('Langauge from Person11 object: ' + person11.language);

//We can also use a method inside object similar to getter
const person12 = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log('Calling fullName method from Person12: ' + person12.fullName());

//Regular Expressions - String Search
//indexOf(), lastIndexOf(), startWith(), endsWith()
//search() replace() and modifiers

//indexOf() - finds the index value of first occurence
let str10 = "Please locate where 'locate' is present";
console.log(
  'Search first occurence of a word using indexOf ' + str10.indexOf('locate')
);

//lastIndexOf() - finds the index value of first occurence
console.log(
  'Search last occurence of a word using indexOf ' + str10.lastIndexOf('locate')
);

//indexOff & lastIndexOff returns -1 if text is not found
//Both these methods take 2nd paramter to denote starting postion of the search

console.log(
  'Search last occurence of a word using indexOf and 2nd parameter ' +
    str10.indexOf('locate', 15)
);

//search()
console.log('Using search() function: ' + str10.search('locate'));

//There is a difference between searc() and indexOf()
//search() can not take second argument for start postion
//indexOf() can not take powerful search values

//String Templates
//Template literal use back ticks `` instead of regular quotes ""
let text = 'Hello World!';
let text1 = `Hellow World!`;
let text2 = `He's is often called "Ruby"`; //single and double quotes can be used in template literals
//Mutli line strings
let text3 = `
The quick
brown fox
jumps over
the lazy do`;
console.log('Multi line text using template literals: ' + text3);

//Using template literals we can perform variable substitutions
let firstName10 = 'John';
let lastName10 = 'Doe';

console.log(
  'Variable Substitution using Template literals: ' +
    `Welcome ${firstName10}, ${lastName10}`
);

//Expression substituion
let price = 10;
let vat = 0.25;

console.log(
  'Expression substitution Total Cost: ' + `${price * (1 + vat).toFixed(2)}`
);
//HTML Templates can be created using template literals
let header = 'Template Literals';
let tags = ['template literals', 'javascript', 'es6'];
let html = `<h2>${header}</h2> <ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
console.log('This is the html formed with template literals: ' + html);
document.getElementById('test3').innerHTML = html;

//DOM (selecting various html elements)

//Dom Window, Click and other Event Listeners

//Modules (Export Import)

//Cookies, sessionStorage
