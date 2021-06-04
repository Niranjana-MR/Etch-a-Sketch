const container = document.querySelector('#container');
const resetButton = document.querySelector('#resetBtn');

let value = 0;
value = window.prompt('Enter the number of squares per side (max 100)');
let createBox;
let boxStorage = {};

resetButton.addEventListener('click', () => {
    if (value > 0) {
        let length = value * value;

        for (i = 1; i <= length; i++) {
            container.removeChild(boxStorage[i]);
        }
    }
    if (value < 0) {
        value = 0;
    }
    value = window.prompt(' Enter the number of squares per side (max 100)');
    checkValue(value);
});

checkValue(value);


function checkValue(userInput) {

    let newInput = 0;

    if (isNaN(userInput)) {
        alert('That was no a number. Press reset and try again!');
    } else if (userInput == 0) {
        alert('You forgot to enter a number. Press reset and try again!');
    } else if (userInput > 100) {
        alert('Maximum number of squares per side = 100. Press reset and try again!');
    } else if (userInput < 0) {
        alert('Number of squares per side cannot be negative. Press reset and try again!');
    } else {
        createBoxes(userInput);
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