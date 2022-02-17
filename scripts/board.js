const tetrisGridContainer = document.querySelector(".tetris__grid");
const scoreGridContainer = document.querySelector(".score__grid");

const boardWidth = 10;
const boardHeight = 20;

const miniboard_width = 4;
const miniboard_height = 4;

function drawBoard(clase, width, heigth, gridcontainer) {
  for (let i = 0; i < width * heigth; i++) {
    const cell = document.createElement("div");
    cell.classList.add(clase, `${clase}-${i}`);
    if (i % width === 9) cell.classList.add('edge') 
    if (i >= 190 && i <= 200) cell.classList.add('bottom-line')
    gridcontainer.appendChild(cell);
    const cellChild = document.createElement("div");
    cellChild.classList.add(`${clase}-child`, `${clase}-child-${i}`);
    cell.appendChild(cellChild);
  }
}

drawBoard("cell", boardWidth, boardHeight, tetrisGridContainer);

drawBoard("score", miniboard_width, miniboard_height, scoreGridContainer);


document.body.onkeydown = function (e) {
  console.log(e.key);
  if (e.key === 'ArrowRight') moveRight();
  if (e.key === 'ArrowDown') moveDown();
  if (e.key === 'ArrowLeft') moveLeft();
  if (e.key === 'ArrowUp') rotate();
};