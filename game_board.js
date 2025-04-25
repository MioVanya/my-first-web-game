const X = 1;
const O = 2;
const EMPTY = 0;
const NUM_SQUARES = 36;
const displayStrings = ['&nbsp;', 'X', 'O'];
const lines = [
    [0,1,2,3,4,5],
    [6,7,8,9,10,11],
    [12,13,14,15,16,17],
    [18,19,20,21,22,23],
    [24,25,26,27,28,29],
    [30,31,32,33,34,35]
  ];
const columns = [
    [0,6,12,18,24,30],
    [1,7,13,19,25,31],
    [2,8,14,20,26,32],
    [3,9,15,21,27,33],
    [4,10,16,22,28,34],
    [5,11,17,23,29,35]
  ];
const diagonals = [
    [0,7,14,21,28,35],
    [5,10,15,20,25,30]
  ];

let board;
let play;

function playGame() {
console.log("Game starting");
board = Array(NUM_SQUARES).fill(EMPTY);
play = X;
}

function squareClicked(numer) {
console.log('Player clicked square' +numer);
if (board[numer] !== EMPTY) return;
if (checkWinner() === true) return;
board[numer] = play;
if (play === X) {
play = O;
} else {
play = X;
}
//play = (play === X) ? O : X;
//komp();
checkWinner();
displayBoard();
}

displayBoard = function() {
for (let i = 0; i < NUM_SQUARES; i++) {
displaySquare(i);
}
}

displaySquare = function(aSquare) {
let squareField = document.getElementById("square"+aSquare);
let valueOfSquare = board[aSquare];
squareField.innerHTML = displayStrings[valueOfSquare];
}

function showFloatingMessage(text) {
const msg = document.getElementById("floating-message");
  msg.textContent = text;
  msg.style.animation = "none";
  void msg.offsetWidth;
  msg.style.animation = "floatInOut 3s ease forwards";
}

function NewGame() {
  board = Array(NUM_SQUARES).fill(EMPTY);
  play = X;
  displayBoard();
  message("");
}


/*function komp() {
let numb;
do {
numb = Math.floor(Math.random() * NUM_SQUARES);
} while (board[numb] !== EMPTY);
board[numb] = O;
}*/
     function checkWinner() {
  for (let i = 0; i < lines.length; i++) {
    let combo = lines[i];
    if (board[combo[0]] === X && board[combo[1]] === X &&
board[combo[2]] === X && board[combo[3]] === X && board[combo[4]] === X && board[combo[5]] === X) {
      console.log("X, WIN!");
      showFloatingMessage("X, WIN!");
      return true;
    }
    if (board[combo[0]] === O && board[combo[1]] === O &&
board[combo[2]] === O && board[combo[3]] === O && board[combo[4]] === O && board[combo[5]] === O) {
      console.log("O, WIN!");
      showFloatingMessage("O, WIN!");
      return true;
    }
  }
  for (let i = 0; i < columns.length; i++) {
    let combo = columns[i];
    if (board[combo[0]] === X && board[combo[1]] === X &&
board[combo[2]] === X && board[combo[3]] === X && board[combo[4]] === X && board[combo[5]] === X) {
      console.log("X, WIN!");
      showFloatingMessage("X, WIN!");
      return true;
    }
    if (board[combo[0]] === O && board[combo[1]] === O &&
board[combo[2]] === O && board[combo[3]] === O && board[combo[4]] === O && board[combo[5]] === O) {
      console.log("O, WIN!");
      showFloatingMessage("O, WIN!");
      return true;
    }
  }
  for (let i = 0; i < diagonals.length; i++) {
    let combo = diagonals[i];
    if (board[combo[0]] === X && board[combo[1]] === X &&
board[combo[2]] === X && board[combo[3]] === X && board[combo[4]] === X && board[combo[5]] === X) {
      console.log("X, WIN!");
      showFloatingMessage("X, WIN!");
      return true;
    }
    if (board[combo[0]] === O && board[combo[1]] === O &&
board[combo[2]] === O && board[combo[3]] === O && board[combo[4]] === O && board[combo[5]] === O) {
      console.log("O, WIN!");
      showFloatingMessage("O, WIN!");
      return true;
    }
  }
  if (!board.includes(EMPTY)) {
    console.log("Draw!");
    showFloatingMessage("Draw!");
    return true;
  }
}
