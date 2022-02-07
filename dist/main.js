/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _styles_cards_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/cards.css */ \"./src/styles/cards.css\");\n/* harmony import */ var _scripts_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/board */ \"./src/scripts/board.js\");\n/* harmony import */ var _scripts_board__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_board__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction addGlobalEventListener(type, selector, callback) {\n  document.addEventListener(type, function (e) {\n    if (e.target.matches(selector)) callback(e);\n  });\n}\n\nfunction createGrid() {\n  var gameBoard = document.getElementById(\"board\");\n\n  for (var i = 0; i < 5; i++) {\n    for (var j = 0; j < 5; j++) {\n      var square = document.createElement(\"div\");\n      square.classList.add(\"square\");\n      square.setAttribute(\"id\", [i, j]); // gameBoard.appendChild(square);\n    }\n  }\n}\n\ncreateGrid(); //   gameOver() {\n//   }\n//   swapMoveCards() {\n//   }\n//   swapTurn() {\n//     if (this.currentPlayer === 2) {\n//       this.currentPlayer === 1;\n//     } else {\n//       this.currentPlayer === 2;\n//     }\n//   }\n// }\n// // Get this:\n// addGlobalEventListener(\"click\", \"div\", e => {\n//   console.log(\"hi\")\n// })\n// // From this:\n// document.addEventListener(\"click\", e => {\n//   if (e.target.matches(\"div\")) {\n//     console.log(\"you clicked a div\");\n//   }\n// })\n// document.addEventListener(\"DOMContentLoaded\", () => {\n// });\n// const card = document.querySelector('.move-card');\n// card.addEventListener('click', function () {\n//   card.classList.toggle('is-flipped');\n// });\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//   debugger;\n//   const game = new Game();\n//   const rootEl = document.querySelector(\".ttt\");\n//   new View(game, rootEl);\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0Msc0JBQVQsQ0FBZ0NDLElBQWhDLEVBQXNDQyxRQUF0QyxFQUFnREMsUUFBaEQsRUFBMEQ7QUFDeERDLEVBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEJKLElBQTFCLEVBQWdDLFVBQUFLLENBQUMsRUFBSTtBQUNuQyxRQUFJQSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQk4sUUFBakIsQ0FBSixFQUFnQ0MsUUFBUSxDQUFDRyxDQUFELENBQVI7QUFDakMsR0FGRDtBQUdEOztBQUdELFNBQVNHLFVBQVQsR0FBc0I7QUFDcEIsTUFBTUMsU0FBUyxHQUFHTixRQUFRLENBQUNPLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBbEI7O0FBRUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUMxQixVQUFJQyxNQUFNLEdBQUdWLFFBQVEsQ0FBQ1csYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQ0FELE1BQUFBLE1BQU0sQ0FBQ0UsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsUUFBckI7QUFDQUgsTUFBQUEsTUFBTSxDQUFDSSxZQUFQLENBQW9CLElBQXBCLEVBQTBCLENBQUNOLENBQUQsRUFBSUMsQ0FBSixDQUExQixFQUgwQixDQUkxQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFREosVUFBVSxJQUVWO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25pdGFtYV9qcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LmNzc1wiXG5pbXBvcnQgXCIuL3N0eWxlcy9jYXJkcy5jc3NcIlxuaW1wb3J0IEJvYXJkIGZyb20gXCIuL3NjcmlwdHMvYm9hcmRcIjtcblxuZnVuY3Rpb24gYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcih0eXBlLCBzZWxlY3RvciwgY2FsbGJhY2spIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikpIGNhbGxiYWNrKGUpXG4gIH0pXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlR3JpZCgpIHtcbiAgY29uc3QgZ2FtZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgNTsgaisrKSB7XG4gICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImlkXCIsIFtpLCBqXSk7XG4gICAgICAvLyBnYW1lQm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9ICAgXG4gIH1cbn1cblxuY3JlYXRlR3JpZCgpO1xuXG4vLyAgIGdhbWVPdmVyKCkge1xuXG4vLyAgIH1cblxuLy8gICBzd2FwTW92ZUNhcmRzKCkge1xuXG4vLyAgIH1cblxuLy8gICBzd2FwVHVybigpIHtcbi8vICAgICBpZiAodGhpcy5jdXJyZW50UGxheWVyID09PSAyKSB7XG4vLyAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPT09IDE7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9PT0gMjtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuXG5cblxuXG5cblxuXG5cbi8vIC8vIEdldCB0aGlzOlxuLy8gYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFwiZGl2XCIsIGUgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhcImhpXCIpXG4vLyB9KVxuLy8gLy8gRnJvbSB0aGlzOlxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuLy8gICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcImRpdlwiKSkge1xuLy8gICAgIGNvbnNvbGUubG9nKFwieW91IGNsaWNrZWQgYSBkaXZcIik7XG4vLyAgIH1cbi8vIH0pXG5cblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBcblxuXG4vLyB9KTtcblxuLy8gY29uc3QgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZlLWNhcmQnKTtcblxuLy8gY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbi8vICAgY2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1mbGlwcGVkJyk7XG4vLyB9KTtcblxuXG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgZGVidWdnZXI7XG4vLyAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuLy8gICBjb25zdCByb290RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR0dFwiKTtcbi8vICAgbmV3IFZpZXcoZ2FtZSwgcm9vdEVsKTtcbi8vIH0pOyJdLCJuYW1lcyI6WyJCb2FyZCIsImFkZEdsb2JhbEV2ZW50TGlzdGVuZXIiLCJ0eXBlIiwic2VsZWN0b3IiLCJjYWxsYmFjayIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJtYXRjaGVzIiwiY3JlYXRlR3JpZCIsImdhbWVCb2FyZCIsImdldEVsZW1lbnRCeUlkIiwiaSIsImoiLCJzcXVhcmUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/***/ (function() {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Board = /*#__PURE__*/function () {\n  function Board() {\n    _classCallCheck(this, Board);\n\n    this.grid = [];\n\n    for (var i = 0; i < 5; i++) {\n      var row = [];\n\n      for (var j = 0; j < 5; j++) {\n        var col = null;\n        row.push(col);\n      }\n\n      this.grid.push(row);\n    }\n  }\n\n  _createClass(Board, [{\n    key: \"validPos\",\n    value: function validPos(pos) {\n      // static?\n      if (pos[0] < 0 || pos[0] > 4) return false;\n      if (pos[1] < 0 || pos[1] > 4) return false; // needs conditional for card limitation!\n\n      return true;\n    }\n  }, {\n    key: \"getPiece\",\n    value: function getPiece(pos) {\n      return this.grid[pos[0]][pos[1]]; // check empty elsewhere? \n    }\n  }, {\n    key: \"isEmpty\",\n    value: function isEmpty(pos) {\n      if (!Board.validPos(pos)) {\n        throw new Error('That position is not valid');\n      }\n\n      return this.grid[(pos[0], pos[1])] === null; // t or f\n    }\n  }]);\n\n  return Board;\n}(); //confirmed by printing below with fill: let col = [`[${i},${j}]`];\n\n\nvar board1 = new Board(); // this.grid[1][1] = 'hello' // assign\n\nconsole.log(board1.grid);\nconsole.log(board1.grid[0][0]);\nconsole.log(board1.grid[4][4]);\nconsole.log(board1.grid[1][3]);\n\nif (validPos([1, 1])) {\n  console.log('valid!'); //valid\n} else {\n  console.log('invalid!');\n}\n\nthis.grid.getPiece([1, 1]); // export default Board;\n// Board should appear: \n//  TOP           OPPONENT\n// [4, 0]  [4, 1]  [4, 2]  [4, 3]  [4, 4]  \n// [3, 0]  [3, 1]  [3, 2]  [3, 3]  [3, 4]  \n// [2, 0]  [2, 1]  [2, 2]  [2, 3]  [2, 4]  \n// [1, 0]  [1, 1]  [1, 2]  [1, 3]  [1, 4]  \n// [0, 0]  [0, 1]  [0, 2]  [0, 3]  [0, 4]  \n// BOTTOM          PLAYER//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbml0YW1hX2pzLy4vc3JjL3NjcmlwdHMvYm9hcmQuanM/YmNiMCJdLCJuYW1lcyI6WyJCb2FyZCIsImdyaWQiLCJpIiwicm93IiwiaiIsImNvbCIsInB1c2giLCJwb3MiLCJ2YWxpZFBvcyIsIkVycm9yIiwiYm9hcmQxIiwiY29uc29sZSIsImxvZyIsImdldFBpZWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFDTUEsSztBQUNKLG1CQUFjO0FBQUE7O0FBQ1osU0FBS0MsSUFBTCxHQUFZLEVBQVo7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCLFVBQUlDLEdBQUcsR0FBRyxFQUFWOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUMxQixZQUFJQyxHQUFHLEdBQUcsSUFBVjtBQUNBRixRQUFBQSxHQUFHLENBQUNHLElBQUosQ0FBU0QsR0FBVDtBQUNEOztBQUNELFdBQUtKLElBQUwsQ0FBVUssSUFBVixDQUFlSCxHQUFmO0FBQ0Q7QUFDRjs7OztXQUdELGtCQUFTSSxHQUFULEVBQWM7QUFBUTtBQUNwQixVQUFJQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVCxJQUFjQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBM0IsRUFBOEIsT0FBTyxLQUFQO0FBQzlCLFVBQUlBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUFULElBQWNBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUEzQixFQUE4QixPQUFPLEtBQVAsQ0FGbEIsQ0FHWjs7QUFDQSxhQUFPLElBQVA7QUFDRDs7O1dBR0Qsa0JBQVNBLEdBQVQsRUFBYztBQUNaLGFBQU8sS0FBS04sSUFBTCxDQUFVTSxHQUFHLENBQUMsQ0FBRCxDQUFiLEVBQWtCQSxHQUFHLENBQUMsQ0FBRCxDQUFyQixDQUFQLENBRFksQ0FFWjtBQUNEOzs7V0FFRCxpQkFBUUEsR0FBUixFQUFhO0FBQ1gsVUFBSSxDQUFDUCxLQUFLLENBQUNRLFFBQU4sQ0FBZUQsR0FBZixDQUFMLEVBQTBCO0FBQ3hCLGNBQU0sSUFBSUUsS0FBSixDQUFVLDRCQUFWLENBQU47QUFDRDs7QUFDRCxhQUFRLEtBQUtSLElBQUwsRUFBVU0sR0FBRyxDQUFDLENBQUQsQ0FBSCxFQUFRQSxHQUFHLENBQUMsQ0FBRCxDQUFyQixPQUE4QixJQUF0QyxDQUpXLENBSW1DO0FBQy9DOzs7O0tBS0g7OztBQUNBLElBQUlHLE1BQU0sR0FBRyxJQUFJVixLQUFKLEVBQWIsQyxDQUVBOztBQUNBVyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBTSxDQUFDVCxJQUFuQjtBQUNBVSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBTSxDQUFDVCxJQUFQLENBQVksQ0FBWixFQUFlLENBQWYsQ0FBWjtBQUNBVSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBTSxDQUFDVCxJQUFQLENBQVksQ0FBWixFQUFlLENBQWYsQ0FBWjtBQUNBVSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBTSxDQUFDVCxJQUFQLENBQVksQ0FBWixFQUFlLENBQWYsQ0FBWjs7QUFDQSxJQUFJTyxRQUFRLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFELENBQVosRUFBc0I7QUFDcEJHLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFEb0IsQ0FDSTtBQUN6QixDQUZELE1BRU87QUFDTEQsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNEOztBQUNELEtBQUtYLElBQUwsQ0FBVVksUUFBVixDQUFtQixDQUFDLENBQUQsRUFBSSxDQUFKLENBQW5CLEUsQ0FFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ncmlkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNTsgaisrKSB7XG4gICAgICAgIGxldCBjb2wgPSBudWxsO1xuICAgICAgICByb3cucHVzaChjb2wpO1xuICAgICAgfVxuICAgICAgdGhpcy5ncmlkLnB1c2gocm93KTtcbiAgICB9XG4gIH1cblxuXG4gIHZhbGlkUG9zKHBvcykgeyAgICAgICAvLyBzdGF0aWM/XG4gICAgaWYgKHBvc1swXSA8IDAgfHwgcG9zWzBdID4gNCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwb3NbMV0gPCAwIHx8IHBvc1sxXSA+IDQpIHJldHVybiBmYWxzZTtcbiAgICAvLyBuZWVkcyBjb25kaXRpb25hbCBmb3IgY2FyZCBsaW1pdGF0aW9uIVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cblxuICBnZXRQaWVjZShwb3MpIHtcbiAgICByZXR1cm4gdGhpcy5ncmlkW3Bvc1swXV1bcG9zWzFdXTtcbiAgICAvLyBjaGVjayBlbXB0eSBlbHNld2hlcmU/IFxuICB9XG5cbiAgaXNFbXB0eShwb3MpIHtcbiAgICBpZiAoIUJvYXJkLnZhbGlkUG9zKHBvcykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhhdCBwb3NpdGlvbiBpcyBub3QgdmFsaWQnKTtcbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLmdyaWRbcG9zWzBdLCBwb3NbMV1dID09PSBudWxsKTsgIC8vIHQgb3IgZlxuICB9XG5cblxuXG59XG4vL2NvbmZpcm1lZCBieSBwcmludGluZyBiZWxvdyB3aXRoIGZpbGw6IGxldCBjb2wgPSBbYFske2l9LCR7an1dYF07XG5sZXQgYm9hcmQxID0gbmV3IEJvYXJkKCk7XG5cbi8vIHRoaXMuZ3JpZFsxXVsxXSA9ICdoZWxsbycgLy8gYXNzaWduXG5jb25zb2xlLmxvZyhib2FyZDEuZ3JpZCk7XG5jb25zb2xlLmxvZyhib2FyZDEuZ3JpZFswXVswXSk7XG5jb25zb2xlLmxvZyhib2FyZDEuZ3JpZFs0XVs0XSk7XG5jb25zb2xlLmxvZyhib2FyZDEuZ3JpZFsxXVszXSk7XG5pZiAodmFsaWRQb3MoWzEsIDFdKSkge1xuICBjb25zb2xlLmxvZygndmFsaWQhJyk7ICAvL3ZhbGlkXG59IGVsc2Uge1xuICBjb25zb2xlLmxvZygnaW52YWxpZCEnKTtcbn1cbnRoaXMuZ3JpZC5nZXRQaWVjZShbMSwgMV0pO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBCb2FyZDtcblxuXG4vLyBCb2FyZCBzaG91bGQgYXBwZWFyOiBcbi8vICBUT1AgICAgICAgICAgIE9QUE9ORU5UXG4vLyBbNCwgMF0gIFs0LCAxXSAgWzQsIDJdICBbNCwgM10gIFs0LCA0XSAgXG4vLyBbMywgMF0gIFszLCAxXSAgWzMsIDJdICBbMywgM10gIFszLCA0XSAgXG4vLyBbMiwgMF0gIFsyLCAxXSAgWzIsIDJdICBbMiwgM10gIFsyLCA0XSAgXG4vLyBbMSwgMF0gIFsxLCAxXSAgWzEsIDJdICBbMSwgM10gIFsxLCA0XSAgXG4vLyBbMCwgMF0gIFswLCAxXSAgWzAsIDJdICBbMCwgM10gIFswLCA0XSAgXG4vLyBCT1RUT00gICAgICAgICAgUExBWUVSIl0sImZpbGUiOiIuL3NyYy9zY3JpcHRzL2JvYXJkLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbml0YW1hX2pzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ }),

/***/ "./src/styles/cards.css":
/*!******************************!*\
  !*** ./src/styles/cards.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2NhcmRzLmNzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbml0YW1hX2pzLy4vc3JjL3N0eWxlcy9jYXJkcy5jc3M/MDAyOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/cards.css\n");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2luZGV4LmNzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbml0YW1hX2pzLy4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NmJjMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/index.css\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;