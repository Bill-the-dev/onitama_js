class Board {
  constructor() {
    this.grid = Board.makeGrid();
  }

  isEmpty(pos) {

  }

  // movePiece()  ?



  makeGrid() {
    let grid = [];
    for (let i = 0; i < 5; i++) {
      grid.push([]);
      for (let j = 0; j < 5; j++) {
        grid[i].push(null);
      }   
    }
    return grid;
  }
  
  makeMoveCards() {
    
  }
}

module.exports = Board;




// makeGrid as static method? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#static_methods_and_properties
