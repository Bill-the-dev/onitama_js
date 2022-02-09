
export default class Piece {
  constructor(type, color) {
    this.type = type;
    this.color = color;
    this.position = null
  }
  

  // position set during instantiation (board.placePiece())
  // currentPos(piece) {
  //   const that = this;
  //   let pos = [];
  //   let posStr = piece.parentElement.id;
  //   let strArr = posStr.slice(1, posStr.length).split(",");
  //   for (let i = 0; i < strArr.length; i++) {
  //     pos.push((parseInt(strArr[i])))
  //   }
  //   piece.position = pos;
  //   return pos;
  // }

}

// piece types: student or master

