// Object

let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    start: function() {
      console.log("Car started");
    }
  };
  
  console.log(car.model); 
  car.start();           

  // Array

let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[2]); 

fruits.push("Orange");  // Add at the end
fruits.pop();           // Remove from the end
fruits.shift();         // Remove from the beginning
fruits.unshift("Mango");// Add at the beginning
