const container = document.querySelector('#container');
const resetButton = document.querySelector('#resetBtn');

let value = window.prompt('Enter the number of grids: ');
let createBox;
let boxStorage = {};

resetButton.addEventListener('click', () => {
    let length = value * value;
    for (i = 1; i <= length; i++) {
        container.removeChild(boxStorage[i]);
    }
    value = window.prompt('Enter the number of grids: ');
    checkValue(value);
});

checkValue(value);


function checkValue(userInput) {
    userInput = Number(userInput);
    if (isNaN(userInput)) {
        userInput = window.prompt(`${userInput} is not a number. Please enter the number of grids: `);
        checkValue(userInput);
    } else if (userInput === '') {
        userInput = window.prompt('You forgot to enter a number. Please enter the number of grids: ');
        checkValue(userInput);
    } else if (userInput > 100) {
        userInput = window.prompt('Please enter a number of 100 or below: ');
        checkValue(userInput);
    } else {
        createBoxes(value);
    }
}

function createBoxes(numberOfBoxes) {

    createColumns(numberOfBoxes);
    numberOfBoxes *= numberOfBoxes;
    for (let i = 1; i <= numberOfBoxes; i++) {
        createBox = document.createElement('div');
        boxStorage[i] = createBox;
        createBox.setAttribute('id', `box${i}`);
        createBox.classList.add('boxes');
        container.appendChild(createBox);
    }
    colorBoxes();
}


function createColumns(cols) {
    for (let i = 1; i <= cols; i++) {
        container.setAttribute('style', `grid-template-columns: repeat(${i}, 1fr);`);
    }
}


function colorBoxes() {
    let mouseTargets = document.querySelectorAll('.boxes');
    let randomColor = '';
    mouseTargets.forEach(box => {
        box.addEventListener('mouseenter', () => { 
            randomColor = generateColor(randomColor);
            box.classList.add('boxes');
            box.setAttribute('style', `background-color:${randomColor};`);
        })
    });    
}


function generateColor(color) {
    let r, b, g = 0;
    let a = 1;
    r = Math.floor((Math.random() * 254));
    g = Math.floor((Math.random() * 252));
    b = Math.floor((Math.random() * 254));
    color = `rgba(${r}, ${g}, ${b}, ${a})`;
    return color;
}