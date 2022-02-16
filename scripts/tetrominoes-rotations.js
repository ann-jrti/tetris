console.log("working");

function moveRight() {
  let canMoveRight;
  let isEdge;
  currentTetromino[currentRotation].forEach((p) => {
    let edge = document
      .querySelector(`.cell-${currentPosition + p}`)
      .classList.contains("edge");
    if (edge) isEdge = true;
  });

  if (!isEdge) {
    canMoveRight = true;
    undrawTetrominoInMainBoard();
    currentPosition++;
    drawTetrominoInMainBoard();
  } else {
    canMoveRight = false;
  }

  return canMoveRight;
}

function moveLeft() {
  let canMoveLeft;
  let collision = currentPosition % boardWidth === 0;
  if (!collision) {
    canMoveLeft = true;
    undrawTetrominoInMainBoard();
    currentPosition--;
    drawTetrominoInMainBoard();
  } else {
    canMoveLeft = false;
  }
  return canMoveLeft;
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
