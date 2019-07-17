/**
 * tic tac toe, w/prime factorization
 * 
 */
var prompt = require('prompt-sync')();
var emoji = require("node-emoji");

class TicTacToe {
  constructor() {
    this.moves = 9;
    this.board = new Board();
    this.winner = null;
    this.players = {
      'X': 1,
      'O': 1
    };
    this.current_player = 'X';
  }

  runGame() {
    console.log("\n"+emoji.get("video_game")+" Let Play!!!! "+emoji.get("video_game"));
    while(this.winner == null && this.moves > 0){
      this.board.printBoard();
      this.printCurrentPlayersTurn();
      let round_result = false;
      while(!round_result){
        round_result = this.playRound();
      }
      this.checkWinCondition();
      this.switchPlayer();
      this.decrementRounds();
    }
    if(this.winner == null){
      this.declareTie();
    }
    this.board.printBoard();
  }
  checkWinCondition(){
    let win_conds = [
      2*7*17, // left column
      3*11*19, //  middle column
      5*13*23,  // right column
      2*3*5, // top row
      7*11*13, // middle row
      17*19*23, // bottom row
      2*11*23, // tl to br diagonal
      5*11*17 // tr to bl diagonal
    ];
    for(let i = 0; i < win_conds.length; i++){
      if(this.players[this.current_player] % win_conds[i] == 0){
        this.winner = this.current_player;
        this.declareWinner();
        return;
      }
    }
    return false;
  }
  grabInput(msg){
    let result = prompt(msg);
    if(result == 'q'){
      console.log("Quitting Game...");
      process.exit(0);
    }
    return result;
  }
  playRound() {
    let input = this.grabInput("Please make your move: ");
    let move = this.board.placePiece(input, this.current_player);
    if(!move){
      this.printInvalidMove();
      return false;
    }
    else{
      this.players[this.current_player]*=move;
      this.printCurrentMove(input);
      return true;
    }  
  }

  printCurrentPlayersTurn() {
    console.log("It is "+this.current_player+" turn");
  }

  decrementRounds() {
    this.moves--;
  }

  declareWinner() {
    console.log("Player "+this.winner+ " has won!!!");
  }

  declareTie() {
    console.log('Tie game...');
  }

  printInvalidMove() {
    console.log(emoji.get("no_entry_sign")+" You can't move there!"+"\nTry again....");
  }

  printCurrentMove(move) {
    console.log("Player "+this.current_player+" moved to square "+move);
  }

  switchPlayer() {
    if(this.current_player === 'X'){
      this.current_player = 'O';
    }
    else{
      this.current_player = 'X';
    }
  }
}

class Board {
  constructor() {
    this.board_values = {
      0:2,
      1:3,
      2:5,
      3:7,
      4:11,
      5:13,
      6:17,
      7:19,
      8:23
    }
    this.display_board = [1,2,3,4,5,6,7,8,9];
  }

  printBoard() {
    let b = this.display_board;
    console.log("\n");
    //console.log(`${b[0]} | ${b[1]} | ${b[2]}`);
    console.log(b[0]+" | "+b[1]+" | "+b[2]);
    console.log("----------");
    console.log(b[3]+" | "+b[4]+" | "+b[5]);
    //console.log(`${b[3]} | ${b[4]} | ${b[5]}`);
    console.log("----------");
    console.log(b[6]+" | "+b[7]+" | "+b[8]);
    //console.log(`${b[6]} | ${b[7]} | ${b[8]}`);
    console.log("\n");
  }

  placePiece(num_position, player) {
    if(typeof this.display_board[num_position - 1] != 'string'){
      this.display_board[num_position - 1] = player;
      return this.board_values[num_position-1];
    }
    return false;
  }
}


let game = new TicTacToe();
game.runGame();

