const container = document.querySelector('#container');
const clearButton = document.querySelector('#clearBtn');

let value = window.prompt('Enter the number of grids: ');
let createBox;
let boxStorage = {};

clearButton.addEventListener('click', ()=> {
    let length = value * value;
    for (i = 1; i<=length;i++){
        container.removeChild(boxStorage[i]);
    }
    value = window.prompt('Enter the number of grids: ');
    checkValue(value);
});

checkValue(value);


function checkValue(userInput) {
    if (isNaN(userInput)) {
        userInput = window.prompt(`${userInput} is not a number. Please enter the number of grids: `);
        checkValue(userInput);
    } else if (userInput === '') {
        userInput = window.prompt('You forgot to enter a number. Please enter the number of grids: ');
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
        createBox.setAttribute('style', ` border: 1px solid black; width: 50px; height: 50px; justify-self: center;`);
        container.appendChild(createBox);
    }
    colorBoxes();
}


function createColumns(cols) {
    for (let i = 1; i <= cols; i++) {
        container.setAttribute('style', `display: grid; 
                                         margin: auto;
                                         justify-content: center; 
                                         grid-template-columns: repeat(${i}, 50px);`);
    }
}


function colorBoxes() {
    let mouseTargets = document.querySelectorAll('.boxes');
    let randomColor = '';
    mouseTargets.forEach(box => {
        box.addEventListener('mouseenter', (e) => {
            randomColor = generateColor(randomColor);
            box.setAttribute('style', `background-color:${randomColor};
                                       border: 1px solid black;
                                       width: 50px;
                                       height: 50px;
                                       justify-self: center;
                            `);
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