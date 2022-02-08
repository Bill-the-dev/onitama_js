import Piece from "./piece";

export default class Board {
  constructor() {
    this.grid = [];
    for (let i = 0; i < 5; i++) {
      let row = [];
      for (let j = 0; j < 5; j++) {
        let col = null;

        row.push(col);
      }
      this.grid.push(row);
    }
    window.Piece = Piece;  // add to window



  }

  validPos(pos) {       // static?
    if (pos[0] < 0 || pos[0] > 4) return false;
    if (pos[1] < 0 || pos[1] > 4) return false;
    // needs conditional for card limitation!
    return true;
  }

  isEmpty(pos) {
    // if (!this.validPos(pos)) {
    //   return false;
    //   // throw new Error('That position is not valid');
    // }
    return (this.grid[pos[0]][pos[1]] === null);  // t or f
  }

  getPiece(pos) {
    return this.grid[pos[0]][pos[1]];
    // check empty elsewhere? 
  }

  viewPlacePiece(pos, piece) {
    let posStr = JSON.stringify(pos);
    let square = document.getElementById(posStr);
    let setPiece = document.createElement('div');
    setPiece.className = `${piece.color}-${piece.type}-piece`;
    square.appendChild(setPiece);
  }

  placePiece(pos, piece) {
    if (this.isEmpty(pos)) {
      this.viewPlacePiece(pos, piece);
      return (this.grid[pos[0]][pos[1]] = piece);
    } else {
      throw new Error('That position is not valid');
    }
  }

  removePiece(pos) {
    return (this.grid[pos[0]][pos[1]] = null);
  }

  movePiece(posStart, posEnd) {
    // posStart = clicked piece
    // posEnd = clicked space (highlighted)
    // if current player color = selected piece color
    // if selected end position = valid (highlighted)
    // if move options include (highlighted)
    let pawn = this.getPiece(posStart);
    this.removePiece(posStart);
    return this.placePiece(posEnd, pawn);
  }


  setBoard() {
    const pawnB1 = new Piece('student', 'blue');
    const pawnB2 = new Piece('student', 'blue');
    const pawnB3 = new Piece('master', 'blue');
    const pawnB4 = new Piece('student', 'blue');
    const pawnB5 = new Piece('student', 'blue');

    this.placePiece([0, 0], pawnB1);

    this.placePiece([0, 1], pawnB2);
    this.placePiece([0, 2], pawnB3);
    this.placePiece([0, 3], pawnB4);
    this.placePiece([0, 4], pawnB5);

    const pawnR1 = new Piece('student', 'red');
    const pawnR2 = new Piece('student', 'red');
    const pawnR3 = new Piece('master', 'red');
    const pawnR4 = new Piece('student', 'red');
    const pawnR5 = new Piece('student', 'red');

    this.placePiece([4, 0], pawnR1);
    this.placePiece([4, 1], pawnR2);
    this.placePiece([4, 2], pawnR3);
    this.placePiece([4, 3], pawnR4);
    this.placePiece([4, 4], pawnR5);

  }

  sayHi() {
    console.log('hiiiiii');
  }


}

// export default Board; 

//confirmed by printing below with fill: let col = [`[${i},${j}]`];
// let board1 = new Board();

// // assignment works!
// board1.grid[1][1] = 'hello' // assign
// console.log(board1.grid);
// console.log(board1.grid[0][0]);


// //validPos() works!
//  if (board1.validPos([1, 1])) {
//   console.log('valid!');  //valid
// } else {
//   console.log('invalid!');
// }

// // getPiece() works!
// console.log(board1.getPiece([1, 1]));

// // isEmpty() works!
// console.log(board1.isEmpty([1, 1]));






// Board should appear: 
//  TOP           OPPONENT
// [4, 0]  [4, 1]  [4, 2]  [4, 3]  [4, 4]  
// [3, 0]  [3, 1]  [3, 2]  [3, 3]  [3, 4]  
// [2, 0]  [2, 1]  [2, 2]  [2, 3]  [2, 4]  
// [1, 0]  [1, 1]  [1, 2]  [1, 3]  [1, 4]  
// [0, 0]  [0, 1]  [0, 2]  [0, 3]  [0, 4]  
// BOTTOM          PLAYER