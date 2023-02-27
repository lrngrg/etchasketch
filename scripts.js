//assign container div
const container = document.querySelector('.container');





function makeGrid(num) {

    for (let i = 0; i < num; i++) {
        const column = document.createElement('div');
        container.appendChild(column);
        column.classList.add('column');
        console.log('i'+i);

        for (let j = 0; j < num; j++) {
            const cell = document.createElement('div');
            column.appendChild(cell);
            cell.classList.add('cell');
            console.log('j'+j);
        }
    }
}

makeGrid(16);

