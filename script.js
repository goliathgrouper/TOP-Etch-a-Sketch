const container = document.querySelector('#container');
let square;
for (let i = 0; i < 256; i++) {
    square = document.createElement('div');
    square.style.border = '1px solid black';
    square.style.padding = '20px';
    square.style.backgroundColor = 'white';
    container.appendChild(square);
}

container.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'green';
});