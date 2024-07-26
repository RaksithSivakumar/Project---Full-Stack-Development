let sum = 10 + 5;         // 15
let difference = 10 - 5;  // 5
let product = 10 * 5;     // 50
let quotient = 10 / 5;    // 2
let remainder = 10 % 3;   // 1

let isEqual = (10 == "10");     // true
let isStrictEqual = (10 === "10"); // false
let isGreater = (10 > 5);       // true


// FUNCTION


// Function declaration
function greet(name) {
    return "Hello " + name;
  }
  
  // Function expression
  const greet = function(name) {
    return "Hello " + name;
  };
  
  // Arrow function
  const greet = (name) => "Hello " + name;
  
  console.log(greet("Raksith")); // Hello Raksith
  