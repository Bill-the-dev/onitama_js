// import Player from './player.js';
import Deck from './deck.js';
import Board from "./board.js";
import Player from "./player";

export default class Game {
  constructor() {
    this.activeGame = false;
    this.targetPos = null;    // checkHighlight
    this.targetCard = null;
    this.targetMoves = null;
    this.activePawn = null;   // checkHighlight
    this.activeCard = null;   // checkHighlight
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
    window.otherPlayer = this.otherPlayer;

  }

  // getter access like a property:
  get currentPlayer() {
    return this.players[this.currentPlayerIdx];
  }

  get otherPlayer() {
    return this.players[((this.currentPlayerIdx + 1) % 2)];
  }

  // always 0 or 1 using %
  swapTurn() {
    this.currentPlayerIdx = (this.currentPlayerIdx + 1) % 2;
    this.player = this.currentPlayer;
    window.player = this.player;
  }

  // deal alternates between players until 4, then on-deck
  dealCard() {
    let card = this.deck.deal();
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

  // all moves
  possibleMoves(card, startPos) {  // all possible
    let that = this;
    if (that.currentPlayerIdx === 0) {
      return that.blueMoves(card, startPos);
    } else {
      return that.redMoves(card, startPos);
    }
  }

  // limits actual moves by empty and color
  allowedMoves(card, startPos) {
    let that = this;

    if (!that.board.validPos(startPos)) return false;
    let allMoves = that.possibleMoves(card, startPos);
    // 
    let realMoves = [];
    for (let i = 0; i < allMoves.length; i++) {
      // ;
      if (that.board.validPos(allMoves[i])) {
        if (that.board.isEmpty(allMoves[i]) === true) {
          realMoves.push(allMoves[i]);
        } else {

          if ((that.board.getPiece(allMoves[i])).color !== that.player.color.toLowerCase()) {
            realMoves.push(allMoves[i]);
          }
        }
      }
    }
    return realMoves;
  }

  blueMoves(card, startPos) {
    let that = this;
    for (let i = 0; i < that.player.hand.length; i++) {
      if (that.player.hand[i] === card) {  // changed from includes
        console.log("ok");
        let moves = that.player.hand[i].slice(1);
        let possiblePos = [];
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
    let that = this;
    for (let i = 0; i < that.player.hand.length; i++) {
      if (that.player.hand[i] === card) {  // changed from .includes 
        let moves = that.player.hand[i].slice(1);
        let movesRev = (that.oppMoves(moves));
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

  checkHighlight() {
    let allCards = document.querySelectorAll(".back");
    let allPawns = document.querySelectorAll("#pawn");
    let that = this;
    allPawns.forEach(function (pawn) {
      if (pawn.classList.contains("active-pawn")) {
        that.activePawn = pawn;
        that.targetPos = that.currentPos(pawn);
        console.log("Found active pawn!");
      }
    });

    allCards.forEach(function (card) {
      if (card.classList.contains("active-card")) {
        console.log("Found active card!");
        that.activeCard = card;
        that.targetCard = that.currentCard(card);
      }
    });

    if (that.activePawn !== null && that.activeCard !== null) {
      console.log("Both Active!");
      that.targetMoves = that.viewMoves();  // highlight pos 
    } else {
      return false;
    }
    // debugger
  }

  // sets game.targetPos in checkHighlight
  currentPos(pawnEl) {
    // const that = this;
    let pos = [];
    let posStr = pawnEl.parentElement.id;
    let strArr = posStr.slice(1, posStr.length).split(",");
    for (let i = 0; i < strArr.length; i++) {
      pos.push((parseInt(strArr[i])));
    }
    return pos;
  }

  // sets game.targetCard in checkHighlight
  currentCard(cardEl) {
    console.log("in currentCard");
    let that = this;
    let cardStr = cardEl.id.slice(4);
    let cardNum = parseInt(cardStr);
    if (cardNum === 1) return that.players[0].hand[0];
    if (cardNum === 2) return that.players[0].hand[1];
    if (cardNum === 3) return null; // need onDeck? Maybe not.
    if (cardNum === 4) return that.players[1].hand[0];
    if (cardNum === 5) return that.players[1].hand[1];
  }

  viewMovePiece(posEndEle) {
    let that = this;
    let posStart = that.currentPos(that.activePawn);
    let posEnd = that.convertStrPos(posEndEle.id);
    // debugger;
    that.board.movePiece(posStart, posEnd); 
    // coded movePiece calls viewPlacePiece
    let piece = that.board.getPiece(posEnd); // Piece
    // debugger
    that.board.viewRemovePiece(posStart);

    // NOW TURN SWAP 
  }


  viewMoves() {
    let that = this;
    let highlightMoves = that.allowedMoves(that.targetCard, that.targetPos);
    let viewSquares = [];
    for (let i = 0; i < highlightMoves.length; i++) {
      let squareSelector = JSON.stringify(highlightMoves[i]);
      let square = document.getElementById(squareSelector);
      viewSquares.push(square);
    }
    let allSquares = document.getElementsByClassName('square');
    for (let i = 0; i < allSquares.length; i++) {
      allSquares[i].classList.remove("active");
      allSquares[i].classList.add("inactive");
    }
    for (let i = 0; i < viewSquares.length; i++) {
      viewSquares[i].classList.add("active");
      viewSquares[i].classList.remove("inactive");
    }

    return highlightMoves;
  }

  // '[1,2]' to [1,2]
  convertStrPos(strPos) {
    let arr = [];
    let strArr = strPos.slice(1, 4).split(',');
    // ['1', '2']
    strArr.forEach((ele) => {
      arr.push(parseInt(ele));
    });
    return arr;
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