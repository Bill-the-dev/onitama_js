const modalHowTo = {
  intro: `
    <h2>How to Play Onitama</h2>

    <p>
      Onitama is simple and quick variation on chess.  Games typically take 5-15 minutes.

    <h3>Setup and the Board</h3>
      <ul>
        <li>Press the <u>Start Game</u> button.</li>

        <li>Each player receives 4 'Student' pawns (circle) and 1 'Master' pawn (square).</li>
        
        <li>Player 1 pawns are set in blue, and Player 2 in red.</li>
        
        <li>Each new game will randomly select 5 movement cards from the total possible 16.</li>

        <li>Each player receives 2 cards in their hand, and 1 is placed outside of the board (right).</li>

        <li>Player 1 (blue) movement cards are below the board, and Player 2 (red )movement cards are above.</li>

        <li>To end the game at any time or redeal the movement cards, press the <u>End Game</u> button.</li>

        <li>Player 1 goes first!</li>
      </ul> 

    <h3>1. Move and Attack</h3>

      <ul>
        <li>Select (click) one of your pawns. Selected pawns will highlight yellow. </li>
        <li>Select (click) one of your cards. Selected cards will highlight yellow.</li>
        <li>Once both a card and pawn are selected, the board will display the possible moves on the board using that pawn and card by highlighting a tile in green.</li>
        <li>Select (click) the tile to move and end your turn.</li>
        <li>If the tile contains an enemy pawn, it will be 'captured' and removed from the board.</li>
      </ul>


      <h3>2. Swap Turns and Cards</h3>

      <ul>
        <li>The move card you used will flip and be exchanged for the move card outside the board, a new movement for next turn!</li>
        <li>Be careful! At the end of your opponents turn they will also exchange, and gain the move you just used!</li>
      </ul>

      <h3>3. Win the Game</h3>

      There are two ways to win the game:
      <ol>
        <li><b>Way of the Stone:</b> win by capturing your opponent's 'Master' pawn.</li>
        <li><b>Way of the Stream:</b> win by moving your own 'Master' into your opponents 'Temple Arch' space (the 'Master' starting space).</li>
      </ol>


      <h3>About</h3>
      Onitama is a two-player chess variant where the player moves pawns across a 5x5 grid using a set of five movement cards.
      <br>
      
      The player may use a card to move any of their pawns in the pattern depicted, however, this card is then exchanged with
      a card outside the board. This allows both players rotating access to all 5 movement cards in play! <br>
      
      The game is easy to learn thanks to its unique visual design. It also allows for a high level of strategic gameplay with
      it's dynamic moveset.<br>

      Onitama was designed by Shimpei Sato and published in print by Arcane Wonders. Learn more and support the original designer and
      publisher <a href="https://www.arcanewonders.com/product/onitama/">here</a>.
    </p>
  `

};

export {modalHowTo as default};