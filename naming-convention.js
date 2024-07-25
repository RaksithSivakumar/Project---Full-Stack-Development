// CAMEL CASE

// Used for : Variable,function,object properties
// The first word is lowercase, and each subsequent word starts with an uppercase letter.

let userName = "Risi";
function getUserName() {

}
const userProfile = {
  firstName: "Raksith",
  lastName: "Code"
};

// PASCAL CASE

// Used for: Class names, constructor functions
// Format: Each word starts with an uppercase letter.

class UserProfile {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  
  function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // SNAKE CASE

  // Used for: Constants, sometimes for file names
  // Format: All letters are lowercase, and words are separated by underscores.

  const MAX_USERS = 450;


// KEBAB CASE

// Used for: File names, URLs
// Format: All letters are lowercase, and words are separated by hyphens.

// ==>  For file names
// +=>  user_profile.js

// HUNGARIAN NOTATION (LESS COMMON)

// Used for: Variables, to indicate the type or intended use
// Format: A prefix is added to indicate the type.

let strName = "Dev"; // String
let numAge = 90;        // Number
let arrUsers = [];      // Array
