// DOM repersents an HTML document as a tree structure where each node is an object representing a part of document

// Accessing DOM Elements

// getElementById => Select an element by its "id"

var element = document.getElementById('myElement');

// getElementByClassName => Select element by their class name

var element = document.getElementsByClassName('myClass');

// getElementByTagName => Select element by their tag name

var element = document.getElementsByTagName('div');

// querySelector => Select the first element that matched a CSS selector 

var element = document.querySelector('.myClass');

// querySelector => Selects all elements that match a CSS selector

var element = document.querySelectorAll('.myClass')