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
      .classList.contains("left-edge");
    if (edge) isEdge = true;
  });
  if (isEdge) return true;
}

function moveRight() {
  console.log(currentTetromino);
  console.log(currentTetromino[currentRotation]);
  console.log(currentPosition);
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
    newTetromino();
  }

  return canMoveDown;
}

function rotate() {
  undrawTetrominoInMainBoard();
  if (currentRotation >= 3) currentRotation = 0;
  else currentRotation++;
  nextRotation++;
  drawTetrominoInMainBoard();
}
let cells = document.querySelectorAll(".cell-child");

function stay() {
  let stay;
  // console.log(currentTetromino[currentPosition]);
  // const collisionCells = currentTetromino[currentPosition].map(c => c + currentPosition + boardWidth)
  // console.log(collisionCells);
  currentTetromino[currentPosition].forEach((p) => {
    console.log(
      document.querySelector(`.cell-${p + currentPosition + boardWidth}`)
    );
    console.log(
      document
        .querySelector(`.cell-${p + currentPosition + boardWidth}`)
        .classList.contains("filled")
    );
  });

  if (
    currentTetromino[currentPosition].some((p) =>
      document
        .querySelector(`.cell-${p + currentPosition + boardWidth}`)
        .classList.contains("filled")
    )
  ) {
    newTetromino();
    stay = true;
  } else {
    stay = false;
  }
  return stay;
}

function reset() {
  currentRotation = 0;
  currentPosition = 0;
  nextRotation = currentRotation + 1;
}
