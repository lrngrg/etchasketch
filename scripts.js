const container = document.querySelector('.container');
const newGridButton = document.querySelector('.button');

function makeGrid(num) {
    for (let i = 0; i < num; i++) {
        const column = document.createElement('div');
        container.appendChild(column);
        column.classList.add('column');
        for (let j = 0; j < num; j++) {
            const cell = document.createElement('div');
            column.appendChild(cell);
            cell.classList.add('cell');
        }
    }
}


makeGrid(16);


const cellElements = document.querySelectorAll('.cell');

cellElements.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'dimgray';
    })
});

//when you click button
newGridButton.addEventListener('click', (e) => {
    

//generates a user prompt that asks for a number
    const gridSize = Number(prompt('What size grid?', 16));
//if enters <16  or >100 re prompt
    if (gridSize < 16 || gridSize > 100) {
        gridSize = Number(prompt('What size grid?', 16));
    }
//else take the input and store it in gridSize variable

    makeGrid(gridSize);
//pass gridSize to makeGrid function to generate new grid
    //makeGrid(gridSize);
})