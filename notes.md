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



