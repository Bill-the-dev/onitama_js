const tiger = ["Tiger", [-1, 0], [2, 0]];

function oppMoves(moveArr) {
  let newMoves = []
  let moves = moveArr.slice(1);
  console.log(moves);

  for (let i = 0; i < moves.length; i++) {
    let subArr = []
    for (let j = 0; j < moves[0].length; j++) {
      let ele = moves[i][j];
      if (ele === 0) {
        subArr.push(ele)
      } else {
        subArr.push(moves[i][j] * -1);
      }
    }
    newMoves.push(subArr);
  }
  return newMoves;
}


// works! accounts for -0 WAT?!
let newM = oppMoves(tiger);
console.log(newM);