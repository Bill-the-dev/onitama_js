// let game1 = new Game();
// game1.board.setBoard();
// game1.start();
// game1.swapTurn()

// import { setTimeout } from "core-js/es6";






// const tiger = ["Tiger", [-1, 0], [2, 0]];

// function oppMoves(moveArr) {
//   let newMoves = []
//   let moves = moveArr.slice(1);
//   console.log(moves);

//   for (let i = 0; i < moves.length; i++) {
//     let subArr = []
//     for (let j = 0; j < moves[0].length; j++) {
//       let ele = moves[i][j];
//       if (ele === 0) {
//         subArr.push(ele)
//       } else {
//         subArr.push(moves[i][j] * -1);
//       }
//     }
//     newMoves.push(subArr);
//   }
//   return newMoves;
// }


// // works! accounts for -0 WAT?!
// let newM = oppMoves(tiger);
// console.log(newM);


// function currentPos() {
//   let pos = [];
//   let posStr = this.parentElement.id;
//   let strArr = posStr.slice(1, posStr.length).split(",");
//   for (let i = 0; i < strArr.length; i++) {
//     pos.push((parseInt(strArr[i])));
//   }
//   return pos;
// }

// let str1 = '[4,3]';

// console.log(currentPos(str1))


// let arr = [1, 2];

// console.log(JSON.stringify(arr))


class Tester {
  constructor() {

  }

  async sayHi() {
    console.log('Hi')
  }

  async sayHello() {
    console.log('Hello');
  } 
  
  async sayWellHello() {
    console.log('Well Hello There');
  }

  displayGreet() {
    this.sayHi().then(
      this.sayHello().then(
        this.sayWellHello()
      )
    )
  }

  displayOther() {
    this.sayHi().then(
      setTimeout(() => { this.sayWellHello().then(
          setTimeout(() => this.sayHello(), 1000)
        )
      }, 1000)
    )
  }
}
let that = new Tester();
that.displayGreet();
that.displayOther();