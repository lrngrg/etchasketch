//assign container div
const container = document.querySelector('#container');


//create function to make a grid
//take a number
//loop through to create that number of rows
//for each item in the row, want to add a cell in the y axis for same number given

//so far this is just creating the correct number of divs

function makeGrid(num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            const cell = document.createElement('div');
            container.appendChild(cell);
            cell.classList.add('cell')
            console.log('x')
        }
    }
}

makeGrid(16);