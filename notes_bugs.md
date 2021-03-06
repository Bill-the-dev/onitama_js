## Known Bugs && WIP
 
[RESOLVED]`grid.placePiece` and `grid.removePiece`
  - possible error, does not remove opposite color object if capture?


[RESOLVED]`grid.winStone` and `grid.winStream`
  - designed to set grid attr to the winning color on true
  - have not decided where to call, issue with place and remove methods need resolution first

[RESOLVED]*How to Play modal*
- HTML formatting not correct.  Font issue? Pojo issue?


*Turn transition background*
- Start button template works, alternate works.  Too harsh when color transition starts.

*Turn transition card* 
- Flip transluscent over to indicate blue/red turn. Above and below the onDeck.

*Possible issue with card rotation*
- Noticed with Mantis card displaying the wrong pattern, only happens sometimes.  Perhaps due to a doubling of a card that is not behaving visibly?

## Design and Structure

Rough draft to get the overall structure.

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

