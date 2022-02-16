console.log("working");

function moveRight() {
  let isEdge;
  currentTetromino[currentRotation].forEach((p) => {
    let edge = document
      .querySelector(`.cell-${currentPosition + p}`)
      .classList.contains("edge");
    if (edge) isEdge = true;
  });

  if (!isEdge) {
    undrawTetrominoInMainBoard();
    currentPosition++;
    drawTetrominoInMainBoard();
  }
}

function moveLeft() {
  console.log(currentPosition);
  let collision = currentPosition % boardWidth === 0;
  console.log(collision);
  if (!collision) {
    undrawTetrominoInMainBoard();
    currentPosition--;
    drawTetrominoInMainBoard();
  }
}

function moveDown() {
  undrawTetrominoInMainBoard();
  currentPosition += boardWidth;
  drawTetrominoInMainBoard();
}

function rotate() {
  undrawTetrominoInMainBoard();
  if (currentRotation >= 3) currentRotation = 0;
  else currentRotation++;
  drawTetrominoInMainBoard();
}

function getMaxNum() {
  return Math.max(...currentTetromino[currentRotation]);
}
