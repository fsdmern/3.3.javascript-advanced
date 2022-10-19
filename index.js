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

//Promises, Fetch, Async/Await
document.write('<p><strong>Promises, Fetch, Async/Await </strong></p>');
//Call back function
document.write('<p><strong>Callback Function </strong></p>');
//A function will be passed to another function as an argument
// function greet(name) {
//   alert(`Hello, ${name}`); //back ticks are called as template literals
// }

// function processUserInput(callback) {
//   const name = prompt('Please enter your name: ');
//   callback(name);
// }

// processUserInput(greet);
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

//DOM (selecting various html elements)

//Window, Click and other Event Listeners

//Modules (Export Import)

//Cookies, sessionStorage

//Java Script Testing (automated testing with Mocha)
