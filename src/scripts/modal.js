export const modalFill = 
`
  <div class="how-to-play">
          <h2 class="htp-title">How to Play Onitama</h2>
          <p class="htp-title-description">
            Onitama is simple and quick variation on chess. Games typically take 5-15 minutes.
          </p>
          <div class="htp-setup section">
            <h3 class="htp-subtitle">Setup and the Board</h3>
  
            <ul class="htp-setup-ul">
              <li>Press the <b>Start Game</b> button.</li>
  
              <li>Each player receives 4 'Student' pawns (circle) and 1 'Master' pawn (square).</li>
  
              <li>Player 1 pawns are set in blue, and Player 2 in red.</li>
  
              <li>Each new game will randomly select 5 movement cards from the total possible 16.</li>
  
              <li>Each player receives 2 cards in their hand, and 1 is placed outside of the board (right).</li>
  
              <li>Player 1 (blue) movement cards are below the board, and Player 2 (red) movement cards are above.</li>
  
              <li>To end the game at any time or redeal the movement cards, press the <b>End Game</b> button.</li>
  
              <li>Player 1 goes first!</li>
            </ul>
          </div>
          <div class="htp-one section">
            <h3 class="htp-subtitle">1. Move and Attack</h3>
  
            <ul>
              <li>Select (click) one of your pawns. Selected pawns will highlight yellow. </li>
              <li>Select (click) one of your cards. Selected cards will highlight yellow.</li>
              <li>Once both a card and pawn are selected, the board will display the possible moves on the board using
                that pawn and
                card by highlighting a tile in green.</li>
              <li>Select (click) the tile to move and end your turn.</li>
              <li>If the tile contains an enemy pawn, it will be 'captured' and removed from the board.</li>
            </ul>
              <div class="gif-container">
                <img class="gif-container-img" src="https://i.imgur.com/VW5cT13.gif" alt="Move and Attack" />
              </div>
          </div>
          <div class="htp-two section">
            <h3 class="htp-subtitle">2. Swap Turns and Cards</h3>
  
            <ul>
              <li>The move card you used will flip and be exchanged for the move card outside the board, a new movement
                for next
                turn!</li>
              <li>Be careful! At the end of your opponents turn they will also exchange, and gain the move you just used!
              </li>
            </ul>
          </div>
  
          <div class="htp-three section">
            <h3 class="htp-subtitle">3. Win the Game</h3>
            <div class="win-types">
              <p>There are two ways to win the game:</p>
  
              <h3 id="p-win-type">Way of the Stone:</h3>
              <p>Win by capturing your opponent's 'Master' pawn.</p>
              <div class="gif-container">
                <img class="gif-container-img" src="https://i.imgur.com/22sr0Oq.gif" alt="Way of Stone" />
              </div>
  
              <h3 id="p-win-type">Way of the Stream:</h3>
              <p>Win by moving your own 'Master' into your opponents 'Temple Arch' space (the 'Master' starting space).
              </p>
              <div class="gif-container">
                <img class="gif-container-img" src="https://i.imgur.com/vYot6EY.gif" alt="Way of Stream" />
              </div>
            </div>
  
          </div>
        </div>
  
        <div class="about section">
          <h3 class="htp-subtitle">About</h3>
          <p>Onitama is a two-player chess variant where the player moves pawns across a 5x5 grid using a set of five
            movement cards.</p>
  
          <p>The player may use a card to move any of their pawns in the pattern depicted, however, this card is then
            exchanged with a card outside the board. This allows both players rotating access to all 5 movement cards in
            play!</p>
  
          <p>The game is easy to learn thanks to its unique visual design. It also allows for a high level of strategic
            gameplay with it's dynamic moveset.</p>
  
          <p>Onitama was designed by Shimpei Sato and published in print by Arcane Wonders. Learn more and support the
            original
            designer and
            publisher <a href="https://www.arcanewonders.com/product/onitama/">here</a>.</p>
        </div>
  `;

  export const modalCards = 
  `
    <div class="all-cards-container">
      <h1 class="all-cards-title">Movement Cards</h1>
      <h3 class="all-cards-subtitle">Each game, a set of 5 cards will be selected at random.  More to come!</h3>

      <div class="move-cards-list"> 
        <div class="move-card modal-card">
          <div class="front">O</div>
          <div class="back inactive-card" id="modal-back-1"></div>
        </div>
        <div class="move-card modal-card">
          <div class="front">O</div>
          <div class="back inactive-card" id="modal-back-2"></div>
        </div>
        <div class="move-card modal-card">
          <div class="front">O</div>
          <div class="back inactive-card" id="modal-back-3"></div>
        </div>
        <div class="move-card modal-card">
          <div class="front">O</div>
          <div class="back inactive-card" id="modal-back-4"></div>
        </div>
        <div class="move-card modal-card">
          <div class="front">O</div>
          <div class="back inactive-card" id="modal-back-5"></div>
        </div>
        <div class="move-card modal-card">
          <div class="front">O</div>
          <div class="back inactive-card" id="modal-back-6"></div>
        </div>
        <div class="move-card modal-card">
          <div class="front">O</div>
          <div class="back inactive-card" id="modal-back-7"></div>
        </div>
        <div class="move-card modal-card">
          <div class="front">O</div>
          <div class="back inactive-card" id="modal-back-8"></div>
        </div>
        <div class="move-card modal-card">
          <div class="front">O</div>
          <div class="back inactive-card" id="modal-back-9"></div>
        </div>
        <div class="move-card modal-card">
          <div class="front">O</div>
          <div class="back inactive-card" id="modal-back-10"></div>
        </div>
        <div class="move-card modal-card">
          <div class="front">O</div>
          <div class="back inactive-card" id="modal-back-11"></div>
        </div>
        <div class="move-card modal-card">
          <div class="front">O</div>
          <div class="back inactive-card" id="modal-back-12"></div>
        </div>
        <div class="move-card modal-card">
          <div class="front">O</div>
          <div class="back inactive-card" id="modal-back-13"></div>
        </div>
        <div class="move-card modal-card">
          <div class="front">O</div>
          <div class="back inactive-card" id="modal-back-14"></div>
        </div>
        <div class="move-card modal-card">
          <div class="front">O</div>
          <div class="back inactive-card" id="modal-back-15"></div>
        </div>
        <div class="move-card modal-card">
          <div class="front">O</div>
          <div class="back inactive-card" id="modal-back-16"></div>
        </div>
      </div>
    </div>
  `;

