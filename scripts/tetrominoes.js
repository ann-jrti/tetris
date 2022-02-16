/* tetrominoes rotations */
const tetrominoI = [[0, boardWidth, boardWidth*2, boardWidth*3], [0, 1, 2, 3], [0, boardWidth, boardWidth*2, boardWidth*3], [0, 1, 2, 3]];
const tetrominoL = [[0, 1, 2, boardWidth], [0, 1, boardWidth+1, (boardWidth*2)+1], [2, boardWidth, boardWidth+1, boardWidth+2], [0, boardWidth, boardWidth*2, (boardWidth*2)+1]];
const tetrominoS = [[1, 2, boardWidth, boardWidth+1], [0, boardWidth, boardWidth+1, boardWidth*2+1]];
const tetrominoZ = [[0, 1, boardWidth+1, boardWidth+2], [1, boardWidth, boardWidth+1, boardWidth*2]];
const tetrominoJ = [[0, 1, 2, boardWidth+2], [1, boardWidth+1, boardWidth*2, boardWidth*2+1], [0, boardWidth, boardWidth+1, boardWidth+2], [0, 1, boardWidth, boardWidth*2]];
const tetrominoO = [[0, 1, boardWidth, boardWidth+1]];
const tetrominoT = [[0, 1, 2, boardWidth+1], [1, boardWidth, boardWidth+1, boardWidth*2+1], [1, boardWidth, boardWidth+1, boardWidth+2], [0, boardWidth, boardWidth+1, boardWidth*2]];

const tetrominoes = [];
tetrominoes.push(tetrominoI, tetrominoL, tetrominoS, tetrominoZ, tetrominoJ, tetrominoO, tetrominoT);

let currentTetromino
let currentPosition = 0;
let currentRotation = 0;
let currentPieceInMiniBoard 

const tetromino = generateRandomTetromino();

function generateRandomTetromino() {
    const randomIndex = Math.floor(Math.random()*7)
    const randomTetrominoInfo = {
        positionAtTetrominoeList: randomIndex,
        piece: tetrominoes[randomIndex],
        position: Math.floor(boardWidth/2),
        rotation: 0
    }
    return randomTetrominoInfo;
}

function drawTetrominoInMainBoard() {
    
    tetromino.piece[tetromino.rotation].forEach(e => document.querySelector(`.cell-${e+tetromino.position-1}`).style.opacity = 1)
    currentTetromino = tetromino;
    console.log(tetromino);
    console.log(tetromino.piece[tetromino.rotation]);
}

function undrawTetrominoInMainBoard() {
    currentTetromino.piece[currentTetromino.rotation].forEach(e => document.querySelector(`.cell-${e+currentTetromino.position-1}`).style.opacity = 0.2)
}

function drawTetrominoInMiniBoard() {
    const tetrominoMiniBoard = currentTetromino.piece[currentTetromino.rotation].map( (pos, i, arr) => {
        if (pos >= 40) return pos = pos-(6*4);
        else if (pos >= 30) return pos = pos-(6*3);
        else if (pos >= 20) return pos = pos-(6*2);
        else if (pos >= 10) return pos = pos-6;
        else return pos = pos;
    });
    currentPieceInMiniBoard = tetrominoMiniBoard
    tetrominoMiniBoard.forEach(e => document.querySelector(`.score-${e}`).style.opacity = 1);
}

function clearMiniBoard() {
    currentPieceInMiniBoard.forEach(e => document.querySelector(`.score${e}`).style.opacity = 0.2)
}