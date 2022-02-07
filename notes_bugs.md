## Design and Structure

Rough draft to get the overall ideas out.

Board
- makeGrid
- fillGrid
- fillCards
- movePiece
- validMove
- isEmpty
- possibleMoves
- currentCards

Piece
- color 
- currentPosition
- moveToStone(master)
- moveToStream(master)

Player
- color
- makeMove
  
Game
- swapTurn
- swapMoveCards
- play (until winStone || winStream)
- quitEarly
- dealCardsAgain   (board?)

Possible?
- selectedCard
- selectedPawn
- studentPawn
- masterPawn
- shrineTile

View
- tileColor
- shrineTile
- cardFlip
- cardMove
- pawnMove
- captureMaster
- captureStudent

---

## Styling 

### Title / Accent Font
[TOP - Nanum Brush Script](https://fonts.google.com/specimen/Nanum+Brush+Script?category=Handwriting)

[TITLE ONLY - Comforter](https://fonts.google.com/specimen/Comforter?category=Handwriting&preview.text=Onitama&preview.text_type=custom)

[East Sea Dodko](https://fonts.google.com/specimen/East+Sea+Dokdo?category=Handwriting)

[Long Cang](https://fonts.google.com/specimen/Long+Cang?category=Handwriting#standard-styles)

[Dr Sugiyama](https://fonts.google.com/specimen/Dr+Sugiyama?category=Handwriting)

### General Text Font
[Swanky and Moo Moo](https://fonts.google.com/specimen/Swanky+and+Moo+Moo?category=Handwriting)

[East Sea Dodko](https://fonts.google.com/specimen/East+Sea+Dokdo?category=Handwriting)

[Walter Turncoat](https://fonts.google.com/specimen/Walter+Turncoat?category=Handwriting)

[Sue Ellen Francisco](https://fonts.google.com/specimen/Sue+Ellen+Francisco?category=Handwriting)

[Gamja Flower](https://fonts.google.com/specimen/Gamja+Flower?category=Handwriting)
[]()
[]()

---

## Bug Journal

2/4
- [clear] `import "./styles/index.css"` was throwing errors due to copy/paste.  The `""` pasted in as typography quotes instead.
- [clear] nvm 14 and 15 not compatible with M1 macs.  nvm 16 works.  


2/5 
- grid layout for the board made progress, but realized it populated in a seemingly random order.  I used HTML to build, considering starting to separate game logic and view portions.  
- Grid logic is flawed as well, going to try to populate a different way
- The 


// let onefour = document.querySelector("[data-square='[1, 4]']")

// let card1 = document.querySelector("[data-card-back='5']")

// card1.innerHTML = tiger

2/7

Here come's a long one: 

I am having import / export problems and cant find the issue.  Hopefully more eyes will spot the error.  

I want `Board` to export to `Game`.  
- `Board` methods all work fine independently (create Board instance, fill board, access and reassign, validPos, etc.)
- Not able to create board within `Game` class.

What I've tried:
- Pulled out all of the styling and html to test just the logic interaction (see built in terminal), `Board` class works as expected.
- Commented out all other import/export (including styling file just in case) except for the following:
  index.js: `import Game from "./scripts/game.js";` 
  game.js: `import Board from "./board.js";` and `export default class Game {`
  board.js: `export default class Board {`

- Format attempts include 
    - `export default Board;` placed at top and bottom of class page, inside and outside class definition, instead of the `export default class Board {` format
    - import with and without `.js` at the end 

- See screenshots for more context.

