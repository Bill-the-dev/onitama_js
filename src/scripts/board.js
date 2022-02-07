
class Board {
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
    if (!Board.validPos(pos)) {
      throw new Error('That position is not valid');
    }
    return (this.grid[pos[0], pos[1]] === null);  // t or f
  }



}
//confirmed by printing below with fill: let col = [`[${i},${j}]`];
let board1 = new Board();

// this.grid[1][1] = 'hello' // assign
console.log(board1.grid);
console.log(board1.grid[0][0]);
console.log(board1.grid[4][4]);
console.log(board1.grid[1][3]);
if (validPos([1, 1])) {
  console.log('valid!');  //valid
} else {
  console.log('invalid!');
}
this.grid.getPiece([1, 1]);

// export default Board;


// Board should appear: 
//  TOP           OPPONENT
// [4, 0]  [4, 1]  [4, 2]  [4, 3]  [4, 4]  
// [3, 0]  [3, 1]  [3, 2]  [3, 3]  [3, 4]  
// [2, 0]  [2, 1]  [2, 2]  [2, 3]  [2, 4]  
// [1, 0]  [1, 1]  [1, 2]  [1, 3]  [1, 4]  
// [0, 0]  [0, 1]  [0, 2]  [0, 3]  [0, 4]  
// BOTTOM          PLAYER