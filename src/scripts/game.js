import Player from './player.js';
import Deck from './deck.js';
import Board from "./board.js";


export default class Game {
  constructor() {
    this.activeGame = false;
    this.currentPlayerIdx = 0;  // to aid with dealing cards
    this.players = [new Player(), new Player()];
    this.deck = new Deck();
    this.board = new Board();
    window.board = this.board;
    window.deck = this.deck;
    window.players = this.players
  }

  get currentPlayer() {
    return this.players[this.currentPlayerIdx];
  }
  // getter, accessed like a property

  swapTurn() {
    this.currentPlayerIdx = (this.currentPlayerIdx + 1) % 2;
    // ensures always 0 or 1 !
  }

  dealCard() {
    this.currentPlayer.dealCard(this.deck.deal());  // calling itself?
    this.swapTurn(); // deals to each player until 4 cards dealt
  }

  start() {
    for (let i = 0; i < 4; i++) {
      this.dealCard();
    }
    this.onDeckCard = this.deck.deal();
    this.activeGame = true;
  }
}


// consider adding a KEY:value list of variables like pawn, master, or player 
// also where to keep card objects?



// function addGlobalEventListener(type, selector, callback) {
//   document.addEventListener(type, e => {
//     if (e.target.matches(selector)) callback(e);
//   });
// }


// function createGrid() {
//   const gameBoard = document.getElementById("board");

//   for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//       let square = document.createElement("div");
//       square.classList.add("square");
//       square.setAttribute("id", [i, j]);
//       // gameBoard.appendChild(square);
//     }
//   }
// }

// createGrid();