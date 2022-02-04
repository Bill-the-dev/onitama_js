import Board from "./board";

class Game {
  constructor() {
    this.board = new Board()
    // this.currentPlayer = ?
  }
  
  gameOver() {

  }

  swapMoveCards() {

  }

  swapTurn() {
    if (this.currentPlayer === 2) {
      this.currentPlayer === 1
    } else {
      this.currentPlayer === 2
    }
  }
}



