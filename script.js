const container = document.querySelector('#container');
let box;


let value = window.prompt('Enter the number of grids: ');

checkValue(value);
colorBoxes();

function checkValue(userInput) {
    if (isNaN(userInput)) {
        userInput = window.prompt(`${userInput} is not a number. Please enter the number of grids: `);
        checkValue(userInput);
    } else if (userInput === '') {
        userInput = window.prompt('You forgot to enter a number. Please enter the number of grids: ');
        checkValue(userInput);
    } else {
        createBox(value);
    }
}

function createBox(boxes) {
    createColumns(boxes);
    boxes *= boxes;

    for (let i = 1; i <= boxes; i++) {
        box = document.createElement('div');
        box.classList.add('boxes')
        box.setAttribute('style', ` border: 1px solid black; width: 50px; height: 50px; justify-self: center;`);
        container.appendChild(box);
    }
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

function generateColor(color){
    let r, b, g = 0;
    let a = 1;
    r = Math.floor((Math.random()*255000)/255);
    g = Math.floor((Math.random()*255000)/255);
    b = Math.floor((Math.random()*255000)/255);
    if(r > 255){
        r = 255;
    }
    if(g>255){
        g = 255;
    }
    if(b>255){
        b = 255;
    }
    color = `rgba(${r}, ${g}, ${b}, ${a})`;
    return color;
}