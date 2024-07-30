// Primitive datatypes

// Variables
var name = 'Risi';
console.log(name);

let number = 450;
console.log(number);

const age = 20;
console.log(age);

// Datatypes

let ID = 'Risi'; // String
console.log(ID);

let num = 57; // Integer
console.log(num);

let isTrue = true; // Boolean
console.log(isTrue);

// Reference datatypes

let job = {
    Role: 'Android development',
    Company: 'Zoho'
};
console.log(job);

// dot.Notation

job.Role = 'Cyber Security';
console.log(job);

// Bracket.Notation

let selection = 'Role';
job[selection] = 'Full Stack Development';
console.log(job.Role);

let fruits = ['apple', 'banana', 'orange', 'pineapple']; // Array
console.log(fruits);

let undefinedVar;
console.log(undefinedVar); // Undefined

let nullVar = null; // null
console.log(nullVar);

// Operators

let addition = 10 + 8; // 18 add
console.log(addition);

let subtraction = 20 - 4; // 16 sub
console.log(subtraction);

let quotient = 20 / 10; // 2 div
console.log(quotient);

let remainder = 40 % 3; // 1 rem
console.log(remainder);

let product = 7 * 45; // 315 multi
console.log(product);

let isEqual = (90 == '90'); // True
console.log(isEqual);

let isStrictEqual = (10 === '10'); // False
console.log(isStrictEqual);

let isGreater = (10 > 5); // True
console.log(isGreater);

// Functions

// Function Declaration
function scope(name) {
    return "My name is " + name;
}
console.log(scope("Risi"));

// Function Expression
const scopeExpr = function(name) {
    return "Hello " + name;
};
console.log(scopeExpr("Risi"));

// Arrow Function
const scopeArrow = (name) => "Hi " + name;
console.log(scopeArrow("Risi"));
