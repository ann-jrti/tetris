console.log("working");

function isBottomLine() {
  let isBottom;
  currentTetromino[currentRotation].forEach((p) => {
    let bottom = document
      .querySelector(`.cell-${currentPosition + p}`)
      .classList.contains("bottom-line");
    if (bottom) isBottom = true;
  });
  if (isBottom) return true;
}

function isEdge() {
  let isEdge;
  currentTetromino[currentRotation].forEach((p) => {
    let edge = document
      .querySelector(`.cell-${currentPosition + p + boardWidth}`)
      .classList.contains("edge");
    if (edge) isEdge = true;
  });
  if (isEdge) return true;
}

function moveRight() {
  let canMoveRight;
  if (!isEdge()) {
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
  let canMoveDown;
  if (!isBottomLine()) {
    canMoveDown = true;
    undrawTetrominoInMainBoard();
    currentPosition += boardWidth;
    drawTetrominoInMainBoard();
  } else {
    canMoveDown = false;
  }
  return canMoveDown;
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
