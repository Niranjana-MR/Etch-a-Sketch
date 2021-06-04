const container = document.querySelector('#container');

let value = window.prompt('Enter the number of grids: ');
checkValue(value);
createBox(value);

function checkValue(userInput){
    if(isNaN(userInput)){
        userInput = window.prompt(`${userInput} is not a number. Please enter the number of grids: `);
        checkValue(userInput);
    }
    else if(userInput === ''){
        userInput = window.prompt('You forgot to enter a number. Please enter the number of grids: ');
        checkValue(userInput);
    }
    else{
        console.log('a number');
    }
}

function createBox(boxes){
    createColumns(boxes);
    boxes *= boxes;
    
    for(let i = 1; i<=boxes;i++){
        const div = document.createElement('div');
        div.setAttribute('id', `box${i}`);
        div.setAttribute('style', ` border: 1px solid black; width: 50px; height: 50px; justify-self: center;`);
        container.appendChild(div);
    }
}

function createColumns(cols){
    for(let i = 1; i<=cols;i++){
        container.setAttribute('style', `display: grid; 
                                         margin: auto;
                                         justify-content: center; 
                                         grid-template-columns: repeat(${i}, 50px);`
                                         );
    }
}