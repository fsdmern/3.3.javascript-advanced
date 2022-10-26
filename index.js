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

//Browser Environment (BOM)
document.write('<h2>Browser Environment - BOM</strong></h2>');
document.write('<h2>Browsers Window</strong></h2>');
//Browser Window
document.write(
  'Browser Inner Width: ' +
    window.innerWidth +
    'px <br>' +
    'Browser Inner Height: ' +
    window.innerHeight +
    'px'
);

document.write('<h2>Window Methods</strong></h2>');
//Window methods
document.write(
  '<ul><li>window.open()</li><li>window.close()</li><li>window.moveTo()</li><li>window.resizeTo()</li></ul>'
);

document.write('<h2>User Screen</strong></h2>');
//window screen is designated with window.screen
//window Properties: screen.width, screen.height,screen.availWidth, screen.availHeight,
//screen.colorDepth, screen.pixelDepth
document.write('Screen Width: ' + screen.width + 'px' + '<br>');
document.write('Screen Height: ' + screen.height + 'px' + '<br>');
//screen.availWidth => this give width of screen minus the width of windows task bar
document.write('Screen Availale Width: ' + screen.availWidth + 'px' + '<br>');
document.write('Screen Availale Height: ' + screen.availHeight + 'px' + '<br>');

//Window color depth => number of bits used to display one clor
//Present day computers use either 24bit (True colors) or 32bit (deep colors) hardware for color resolution
document.write('Screen color Depth: ' + screen.colorDepth + ' bit' + '<br>');
//Window screen pixel Depth => pixel Depth of the screen
document.write('Screen pixel Depth: ' + screen.pixelDepth + ' bit' + '<br>');

//Location: Denoted with window.location
//window.location.href => returns the url of the current page
//.hostname => returns the domain name of the webhost
//.pathname => returns the path and filename of the current page
//.protocol => returns the webprotocol used (http: or https:)
//.assign loads a new document
document.write('<h2>Location</strong></h2>');
document.write(
  'Page Location via window.location : ' + window.location + '<br>'
);
document.write(
  'Page Location via window.location.href : ' + window.location.href + '<br>'
);
document.write(
  'Host Name via window.location.hostname : ' +
    window.location.hostname +
    '<br>'
);

document.write(
  'Port No. via window.location.port : ' + window.location.port + '<br>'
);

document.write(
  'Path Name via window.location.pathname : ' +
    window.location.pathname +
    '<br>'
);

document.write(
  'Protocol via window.location.protocol : ' + window.location.protocol + '<br>'
);

//History: denoted with window.history => similar to back button in browser
//history.back() and history.forward() => similar to forward button in browser
document.write('<h2>Hisory</strong></h2>');
function backButton() {
  window.history.back();
}

//Navigator: It contains the information about the user's browser
//window.navigator
//options: navigator.cookieEnabled (true or false), navigator.appCodeName, navigator.platform
document.write('<h2>Navigator</strong></h2>');
document.write('Cookie Status : ' + window.navigator.cookieEnabled + '<br>');
document.write('App Code Name : ' + window.navigator.appName + '<br>'); //Deprecated
document.write('Platform Name : ' + window.navigator.platform + '<br>');
document.write('Language Name : ' + window.navigator.language + '<br>');
document.write('Whether browser online : ' + window.navigator.onLine + '<br>');

//Popup Boxes:
//Alert (use clicks to proceed), Confirm (Ok or Cancel), Prompt (take input from the user)
//Syntax window.alert but can also be used without window word
document.write('<h2>Popup Alert</strong></h2>');

//Timing Events
document.write('<h2>Timing</strong></h2>');
//setTimeout => setTimeout(function, milliseconds) => Executes after specified waiting time is over
//setInterval => setInterval(function, milliseconds) => Executes the given function continously at specified interval
//clearTimeout => to stop the excution of a running setTimeout function
//clearInterval => to stop the excution of a running setInterval function

//setTimeout and setInterval
// function testSetTimeout() {
//   document.write('I am setTimeout function');
// }
// setTimeout(testSetTimeout, 5000);

//Cookies: Cookies are a way to remember information about the user
//They are stored in small text files inside the users computer
//They are stored in key: value format
document.write('<h2>Cookies</strong></h2>');
//Create a cookie
//document.cookie = "username=John Doe"
//Specify cookie expiry
//document.cookie = "username=John Doe; expires=Tue, 25 Pct 2022 08:45:00 GMT"
//Reading of cookie: document.cookie
//Change a cookie is similar to creating a cookie
//Delete a cookie: Automatically get removed after expiry

document.write('<h2>Document Object Model - DOM</strong></h2>');
//DOM (selecting various html elements)
//Methods: Actions that can be performed on HTML elements
//Properties: Are values of html elements that we can set or modify
//Example:
//=================================
//document.getElementById => Method
//.innerHTML => property
//Categories:
document.write('<p><strong>Finding HTML Elements</strong></p>');
//a. Finding HTML elements
//document.getElementById(id), document.getElementsByTagName(name),document.getElementsByClassName(name)
document.write('<p><strong>Changing the HTML Elements</strong></p>');
//b. Changing HTML Elements
//element.innerHTML (this repalces the contents inside the HTML element)
//element.attribute (change attribute value)
//element.style.property = style (chanages the style of the element)
//method: element.setAttribute(attribute, value) (chages the attribute value of HTML element)

let tagValue = document.getElementsByTagName('p');
document.write(tagValue[0].innerHTML + '<br>');
document.write(tagValue[1].innerHTML + '<br>');
document.write(tagValue[2].innerHTML + '<br>');

let paragraph = document.getElementById('paragraph');
paragraph.setAttribute('style', 'color:blue; font-weight: bold');

//c. Updating and Delete
document.write(
  '<p><strong>Updating and Deleting the HTML Elements</strong></p>'
);
//document.createElement(element)
let myNewElement = document.createElement('h3');
// let innerText = document.createTextNode('This is h3 element text');
// myNewElement.appendChild(innerText);
let myDiv = document.getElementById('append');
myDiv.appendChild(myNewElement);

// document.write(myNewElement[0]);
// // myNewElement.setAttribute('id', 'heading');
// myNewElement.getElementById('heading').innerHTML = 'This is header 6 Text';
// document.write(myNewElement);

//document.removeChild(element)
//document.appendChild(element)
//document.replaceChild(new, old)
//document.write(text)

//Dom Window, Click and other Event Listeners
//User Events
//Mouse Click, Webpage loading, image loading, mouse hover, input field has changed, html form is submitted, user strokes a key
function changeText(id) {
  id.innerHTML = 'Hello World!';
}

function displayDate() {
  document.getElementById('date').innerHTML = Date();
}

function mouseOver(id) {
  id.innerHTML = 'This is mouse over';
  id.setAttribute(
    'style',
    'background-color: red;color: white;width: 200px; height: 150px'
  );
}

function mouseOut(id) {
  id.innerHTML = 'This is mouse out';
  id.setAttribute(
    'style',
    'background-color: blue;color:white;width: 200px; height: 150px'
  );
}

//Modules (Export Import)

//Cookies, sessionStorage
