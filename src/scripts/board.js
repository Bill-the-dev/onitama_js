
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
  }


  validPos(pos) {       // static?
    if (pos[0] < 0 || pos[0] > 4) return false;
    if (pos[1] < 0 || pos[1] > 4) return false;
    // needs conditional for card limitation!
    return true;
  }


  getPiece(pos) {
    return this.grid[pos[0]][pos[1]];
    // check empty elsewhere? 
  }

  isEmpty(pos) {
    if (!this.validPos(pos)) {
      throw new Error('That position is not valid');
    }
    return (this.grid[pos[0], pos[1]] === null);  // t or f
  }

  sayHi() {
    console.log('hiiiiii')
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