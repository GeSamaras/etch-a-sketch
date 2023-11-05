let color = 'black';


function populateBoard(size) {
    let board = document.querySelector('.sketch-board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
    
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let cell = document.createElement('div');
        cell.style.backgroundColor = 'white' ;
        // adding a hover effect to the cell
        cell.addEventListener('mouseover', colorSquare);
        board.insertAdjacentElement("beforeend", cell);
    }
}
populateBoard(16);

function changeSize(input) {
    if (input <= 2 || input > 100) {
        alert('Please enter a number between 1 and 100');
        return;
    }
    populateBoard(input);
}

function colorSquare() {
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
    this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector('.sketch-board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}