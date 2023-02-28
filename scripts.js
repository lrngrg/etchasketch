const container = document.querySelector('.container');
const newGridButton = document.querySelector('button');

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

function getGridSize() {
    
}

makeGrid(100);


const cellElements = document.querySelectorAll('.cell');

cellElements.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'dimgray';
    })
});