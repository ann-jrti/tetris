function gameLoop() {
  const interval = setInterval(() => {
    moveDown();
  }, 1000);
}

function init() {
  drawBoard("cell", boardWidth, boardHeight, tetrisGridContainer);
  drawBoard("score", miniboard_width, miniboard_height, scoreGridContainer);
  const tetromino = generateRandomTetromino();
  currentTetromino = tetromino.piece;
  drawTetrominoInMainBoard();

  const prepareNext = generateRandomTetromino();
  nextTetromino = prepareNext.piece;
  drawTetrominoInMiniBoard();
  //gameLoop();
}

init();
