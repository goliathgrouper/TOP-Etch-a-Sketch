const SIZE = 700;

const container = document.querySelector('#container');

function getSquareSize(squareNumber) {
    return `${(SIZE/squareNumber)-2}px`;
}

function generateGrid(n) {
    let square;
    for (let i = 0; i < n**2; i++) {
        square = document.createElement('div');
        square.style.border = '1px solid black';
        square.style.width = getSquareSize(n);
        square.style.height = getSquareSize(n);
        square.style.backgroundColor = 'white';

        container.appendChild(square);
    }
}

generateGrid(16);

container.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'green';
});


const changeGrid = document.querySelector('#grid-size');

changeGrid.addEventListener('click', () => {
    let grid = prompt();
    while (grid < 1 || grid > 100) {
        alert('Enter number from 1 to 100');
        grid = prompt();
    }
    let oldGrid = document.querySelectorAll('#container > div');
    oldGrid.forEach((square) => {
        container.removeChild(square);
    })
    generateGrid(grid);
});