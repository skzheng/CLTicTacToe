// var prompt = require('prompt');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [[],[],[]] ,
  [[],[],[]],
  [[],[],[]]
];
function resetBoard(){
  board = [
    [[],[],[]],
    [[],[],[]],
    [[],[],[]]
  ];
}
let current = 'O';

console.log('Welcome to CL Tic Tac Toe!');
console.log('Make moves by inputting numbers representing spaces!')
console.log('[[1],[2],[3]]\n[[4],[5],[6]]\n[[7],[8],[9]]');
console.log("O's turn");
printBoard();

function printBoard(){
  console.log(`Current board:`);
  for (let i = 0 ; i < board.length ; i++){
    console.log(board[i]);
  }
}
rl.question('Where would you like to move?', (answer) => {
  if( Number.isNaN(answer) || answer > 9 || answer < 1){
    console.log('Please make a valid move');
  } else {
    placeMove(answer);
    printBoard();
  }
});

function placeMove(num){
  if (num > 6){
    board[2][num - 7] = current;
  } else if (num > 3) {
    board[1][num - 4] = current;
  } else if (num > 0){
    board[0][num - 1] = current;
  }
}

function boardCheck(){
  return checkRows() || checkCols() || checkDiag();
}
function checkRows(){
  let winner = false;
  for (let i = 0 ; i < board.length; i++){
    if(board[i].reduce((acc,item) => {
      return JSON.stringify(acc) === JSON.stringify(item);
    })){
      winner = true;
      break;
    }
  };
  return winner;
}
