
// Code 1-------------------------------------------------------------------------------

const { readFileSync, writeFileSync } = require("fs");

const fs = require("fs");

// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);



//Practice on how to connect to data base
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" } 
);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" } //Appends the first and sendond text to the the result-sync file
);


// Code 2-------------------------------------------------------------------------------

//deconstructed object
const {readFile, writeFile}  = require('fs');
console.log('start');
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    ///Will console log err message if an error occurs
    console.log(err);
    return;
  }
  const first = result;
  console.log(result);
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log(result);
    writeFile(
      "./content/result-async.txt",
      //Will wriite this text in the result-async.txt folder if it completes
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with the task");
      }
    );
  });
});

console.log("starting next task");



// Code 3-------------------------------------------------------------------------------

//This is an example of a function using XMLHttpRequest 
//This was used before ES6 fetch 


const getTodos = () => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    //This will console.log a 200 status state if the the response is succesful
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
    } else if (request.readyState === 4) {
      console.log("could not fetch the data");
    }
  });
//Here we are comanding the request to work
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
};
//Here we call the request twice
getTodos();
getTodos();



// Code 4-------------------------------------------------------------------------------


// validation.js;   

//another deconstructed ponject so we can use express
const { check } = require("express-validator");
exports.signupValidation = [
  check("name", "Name is requied").not().isEmpty(),
  check("email", "Please include a valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
];
exports.loginValidation = [
  check("email", "Please include a valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
];



// Server.js file
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { signupValidation, loginValidation } = require('./validation.js');
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(cors());
app.get("/", (req, res) => {
  res.send("Node js file upload rest apis");
});
app.post("/register", signupValidation, (req, res, next) => {
  // your registration code
});
app.post("/login", loginValidation, (req, res, next) => {
  // your login code
});
// Handling Errors
app.use((err, req, res, next) => {
  // console.log(err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});
app.listen(3000, () => console.log("Server is running on port 3000"));


// Code 5-------------------------------------------------------------------------------

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "your username",
  password: "your password",
  database: "your database name",
});
connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected!:)");
  }
});
module.exports = connection;
