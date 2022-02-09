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
    
    // Window debugging:
    window.board = this.board;
    window.deck = this.deck;
    window.players = this.players;
    window.player = this.player;
    window.otherPlayer = this.otherPlayer
    
  }

  // getter access like a property:
  get currentPlayer() {
    return this.players[this.currentPlayerIdx];
  }

  get otherPlayer() {
    return this.players[((this.currentPlayerIdx + 1) % 2)]
  }

  // always 0 or 1 using %
  swapTurn() {
    this.currentPlayerIdx = (this.currentPlayerIdx + 1) % 2;
    this.player = this.currentPlayer;
    window.player = this.player;
  }

  // deal alternates between players until 4, then on-deck
  dealCard() {
    let card = this.deck.deal()
    this.currentPlayer.dealCard(card);  
    this.swapTurn(); 
  }

  // event handled in index.js 
  start() {
    for (let i = 0; i < 4; i++) {
      this.dealCard();
    }
    this.onDeckCard = this.deck.deal();
    this.activeGame = true;
    this.board.setBoard();
    
  }

  possibleMoves(card, startPos) {  // all possible
    if (this.currentPlayerIdx === 0) {
      return this.blueMoves(card, startPos);
    } else {
      return this.redMoves(card, startPos);
    }
  }

  allowedMoves(card, startPos) {  // limited actual!
    if (!this.board.validPos(startPos)) return false;
    let allMoves = this.possibleMoves(card, startPos)
    let realMoves = []
    for (let i = 0; i < allMoves.length; i++) {
      debugger
      if (this.board.validPos(allMoves[i])) {
        if (this.board.isEmpty(allMoves[i])) {
          //highlight green?
          realMoves.push(allMoves[i]);
          debugger
        } else if ((this.board.getPiece(allMoves[i])).color !== this.player.color) {
        //highlight gold?
        debugger
        realMoves.push(allMoves[i]);
        }
      }
    }
    return realMoves;
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

  oppMoves(moves) {  // flips opponent possible pos 
    let newMoves = [];
    console.log(moves);
    console.log("in oppMoves");

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

  redMoves(card, startPos) {
    for (let i = 0; i < this.player.hand.length; i++) {  //error here?

      // if (this.deck.currentCards[i][0] === card) {  // string!
      if (this.player.hand[i].includes(card)) {
        console.log("ok");
        let moves = this.player.hand[i].slice(1);
        let movesRev = (this.oppMoves(moves));
        let possiblePos = [];
        for (let j = 0; j < movesRev.length; j++) {
          let row = startPos[0] + movesRev[j][0];
          let col = startPos[1] + movesRev[j][1];
          possiblePos.push([row, col]);
        }
        return possiblePos;
      } else {
        console.log("Card is not in your hand");  
      }
    }
  }

  // addGlobalEventListener("click", "#start", e => {
  //   console.log("You clicked start");
  //   let startEle = document.querySelector("#start");
  //   if (this.game.activeGame === false) {
  //     this.game.start();
  //     startEle.classList.remove("start-inactive");
  //     startEle.classList.add("start-active");
  //     startEle.value = "End Game";
  //   }
  // }); 


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