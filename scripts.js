const container = document.querySelector('.container');

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

const cellElement = document.querySelectorAll('.cell');

cellElement.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
    })
});