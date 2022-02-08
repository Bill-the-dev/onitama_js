import Player from './player.js';
import Deck from './deck.js';
import Board from "./board.js";


export default class Game {
  constructor() {
    this.activeGame = false;
    this.currentPlayerIdx = 0;  // aid with dealing cards
    this.players = [new Player("Player 1", "Blue"), new Player("Player 2", "Red")];
    this.player = this.currentPlayer;
    this.deck = new Deck();
    this.board = new Board();
    window.board = this.board;
    window.deck = this.deck;
    window.players = this.players;
    window.player = this.player;
  }

  get currentPlayer() {
    return this.players[this.currentPlayerIdx];
  }
  // getter, accessed like a property

  swapTurn() {
    this.currentPlayerIdx = (this.currentPlayerIdx + 1) % 2;
    // ensures always 0 or 1  -working!
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

  possibleMoves(card, startPos) {
    if (this.currentPlayerIdx === 0) {
      this.blueMoves(card, startPos);
    } else {
      this.redMoves(card, startPos);
    }
  }

  oppMoves(moveArr) {  // flips opponent possible pos 
    let newMoves = [];
    let moves = moveArr.slice(1);
    console.log(moves);

    for (let i = 0; i < moves.length; i++) {
      let subArr = [];
      for (let j = 0; j < moves[0].length; j++) {
        let ele = moves[i][j];
        if (ele === 0) {
          subArr.push(ele);
        } else {
          subArr.push(moves[i][j] * -1);
        }
      }
      newMoves.push(subArr);
    }
    return newMoves;
  }


  blueMoves(card, startPos) {  // need startPos from click!
    console.log("Blueee");
    for (let i = 0; i < this.player.hand.length; i++) {  //error here?
      
      // if (this.deck.currentCards[i][0] === card) {  // string!
      if (this.player.hand[i].includes(card)) { 
        console.log("ok")
        let moves = this.player.hand[i].slice(1);
        let possiblePos = []
        for (let j = 0; j < moves.length; j++) {
          let row = startPos[0] + moves[j][0];
          let col = startPos[1] + moves[j][1];
          possiblePos.push([row, col]);          
        }
        return possiblePos;  
      } else {
        console.log("Card is not in your hand");  // all returning else
      }
    }
  }

  redMoves(card, startPos) {
    for (let i = 0; i < this.player.hand.length; i++) {  //error here?

      // if (this.deck.currentCards[i][0] === card) {  // string!
      if (this.player.hand[i].includes(card)) {
        console.log("ok");
        let moves = this.player.hand[i].slice(1);
        let possiblePos = [];
        for (let j = 0; j < moves.length; j++) {
          let row = startPos[0] + moves[j][0];
          let col = startPos[1] + moves[j][1];
          possiblePos.push([row, col]);
        }
        return possiblePos;
      } else {
        console.log("Card is not in your hand");  
      }
    }
    console.log("Reedddd");
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