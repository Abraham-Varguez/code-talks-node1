//Code 1
// What is a promise? What are promises used for?  What are pro/cons to using a promise? 
//  Please code some examples of promises to show to the class. Make sure to go into detail 
//  as you explain your code to the class.



// A promise is an object in JavaScript that represents the eventual completion or failure of an asynchronous operation.
//  It is commonly used for handling asynchronous operations such as fetching data from a server, making AJAX requests, or 
//  executing time-consuming tasks that may take some time to complete. 
// Promises provide a way to handle asynchronous operations in a more structured and readable manner.

// Pros: Readalibility, Error Handaling, COmpisitoon, Avoiding Calback hell
// COns: Browser Compabilitty, Learning Curve

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" };
      resolve(data); // Resolving the promise with the data
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });



//   Codee 2

// What is a callback? What is callback hell? Why does callback hell occur and why should we avoid callback hell?  
// Please code an example
//  of callback hell to show to the class. Make sure to go into detail as you explain your code to the class.

// A callback is a function that is passed as an argument to another function and is executed at a later
//  point in time or when a certain event occurs. Callbacks are commonly used in JavaScript to handle asynchronous operations, 
//  such as making AJAX requests or performing file I/O.

// Callback hell refers to a situation where multiple nested callbacks are used, resulting in code that is difficult to read and maintain.
//  This typically occurs when dealing
// with multiple asynchronous operations that depend on each other's results.

function greet(name, callback) {
  const greeting = `Hello, ${name}!`;
  callback(greeting);
}

function printMessage(message) {
  console.log(message);
}

greet("John", printMessage);


// Coding Problem 3

// The “this” keyword works differently in arrow functions vs regularly declared functions.
//   Explain how the “this” keyword works differently in arrow functions vs normal functions.
//    Write some code that shows that you understand the difference between how the “this” keyword is used.
//      Make sure to go into detail as you explain your code to the class.


// Inside a regular function, the value of this can be influenced by:

// Global context: If the function is called without any explicit context, this refers to the global object (e.g., window in browsers, global in Node.js).

// Object method context: When a function is called as a method of an object, this refers to the object itself.

// Arrow Functions:
// Arrow functions, introduced in ES6, do not have their own binding of this. Instead, they lexically capture the this value from the surrounding code.
// The lexical scoping of this in arrow functions means that the value of this inside an arrow function is determined by the surrounding scope where the arrow 
// function is defined, rather than how it is called.

const person = {
  name: 'John',
  greet: function() {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`);
    }, 1000);
  }
};

person.greet(); // Output: Hello, John!

// Coding Problem 4


// Using only the filter method on the numbers array, create a function that returns a new array that only contains the numbers divisible by both 3 and 6 but NOT 9. 

// const numbers = [48, 20, 18, 7, 12,9, 8,10,12, 96, 3,36,51];


const numbers = [48, 20, 18, 7, 12, 9, 8, 10, 12, 96, 3, 36, 51];

function filterArray(numbers) {
  return numbers.filter(num => num % 3 === 0 && num % 6 === 0 && num % 9 !== 0);
}

const result = filterArray(numbers);
console.log(result); // Output: [48, 12, 36]



// Coding Problem 5
// What is a async/await? Why is async/await useful? 
//  What are pro/cons to using async/await?  Please code some examples of async/await to show to the class. 
//  Make sure to go into detail as you explain your code to the class.

// Async/await is useful for the following reasons: Readability and Maintainability,Error Handling,Promise Composition,Debugging

//Example
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" };
      resolve(data);
    }, 2000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();


