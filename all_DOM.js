// Selecting elements
const titleElement = document.getElementById('title');
const contentElement = document.getElementsByClassName('content');
const firstParagraph = document.querySelector('p');
const allParagraphs = document.querySelector('p');

// MOdifying content
titleElement.textContent = 'Updated Title Using Javascript';
titleElement.innerHTML = 'This is the <storng>first</strong> paragraph updated with <em>inner</em>.';

// Adding styles
firstParagraph.style.color = 'blue';
firstParagraph.style.fontSize = '20';
firstParagraph.classList.add('hightlight');

// Adding and removing attributes
const imgElement = document.querySelector('img');
imgElement.setAttribute ('alt', 'An example image');
imgElement.removeAttribute('alt');

// Event handing
const button = document.querySelector('button');
button.addEventListener('click', () => {
    alert('Button was clicked!');
});

// Removing elements
const unwantedElement = document.querySelector('.unwanted');
if (unwantedElement) {
    unwantedElement.remove();
}

// Accessing and modifying attriutes
const link = document.querySelector('a');
console.log(link.getAttribute('herf'));
link.setAttribute('herf', 'https://www.example.com');

// Working with classes
const contentDiv = document.querySelector('.content');
contentDiv.classList.add('new-class');
contentDiv.classList.remove('old-class');
contentDiv.classList.toggle('toggle-class');

// Travesing the DOM
const parentElement = firstParagraph.parentElement;
const nextSibling = firstParagraph.nextElementSibling;
const perivoousSibling = firstParagraph.previousElementSibling;

// Handling form input
const input = document.querySelector('input[type="type"]');
input.addEventListener('input', () => {
    console.log('Current input value: ${input.valur}')
});









