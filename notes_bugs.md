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