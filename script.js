const container = document.querySelector('#container');
let square;
for (let i = 0; i < 256; i++) {
    square = document.createElement('div');
    square.style.border = '1px solid black';
    square.style.padding = '20px';
    container.appendChild(square);
}