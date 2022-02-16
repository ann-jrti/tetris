console.log('working');

function moveRight() {
    let collision = false;
    undrawTetrominoInMainBoard();
    currentTetromino.position ++;
    drawTetrominoInMainBoard();
}

function moveLeft() {
    let collision = false;
    undrawTetrominoInMainBoard();
    currentTetromino.position --;
    drawTetrominoInMainBoard();
}

function moveDown() {
    let collision = false;
    undrawTetrominoInMainBoard();
    console.log(currentTetromino.position);
    currentTetromino.position += boardWidth;
    console.log(currentTetromino.position);
    drawTetrominoInMainBoard();
}

function rotate() {
    let collision = false;
    undrawTetrominoInMainBoard();
    currentTetromino.position ++;
    drawTetrominoInMainBoard();
}



document.body.onkeydown = function (e) {
    console.log(e.key);
    if (e.key === 'ArrowRight') moveRight();
    if (e.key === 'ArrowDown') moveDown();
    if (e.key === 'ArrowLeft') moveLeft();
    if (e.key === 'ArrowUp') rotate();
};