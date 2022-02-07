// import "./card.js";

// class Board {
//   constructor(selector) {
//     this.element = document.querySelector(selector);
//     console.log(this.element);
//     this.grid = Board.makeGrid();
//   }

//   isEmpty(pos) {
//     if (!Board.validPos(pos)) {
//       throw new Error('That position is not valid');
//     }
//     return (this.grid[pos[0], pos[1]] === null);  // t or f
//   }

//   // movePiece()  ?

//   validPos(pos) {       // static?
//     if (pos[0] < 0 || pos[0] > 4) return false;
//     if (pos[1] < 0 || pos[1] > 4) return false;
//     // needs conditional for card limitation!
//     return true;
//   }

//   static makeGrid() {          // static?
//     let grid = [];
//     for (let i = 0; i < 5; i++) {
//       grid.push([]);
//       for (let j = 0; j < 5; j++) {
//         grid[i].push(null);
//       }
//     }
//     return grid;
//   }


// }

// export default Board;




// makeGrid as static method? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#static_methods_and_properties
