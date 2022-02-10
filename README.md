# Onitama

## Table of Contents
- [Onitama](#onitama)
  - [Table of Contents](#table-of-contents)
  - [Live Site](#live-site)
  - [Description](#description)
  - [Technologies](#technologies)
  - [Gameplay](#gameplay)
  - [Notable Design](#notable-design)
  - [Bonus](#bonus)
  - [Project Files Glossary](#project-files-glossary)

---

## Live Site

- https://bill-the-dev.github.io/onitama_js/

---

## Description

Onitama is a strategy board game for two players. The player moves their pawns on a 5x5 grid using a set of five movement cards. The player may use a card to move any of their pawns in the pattern depicted, however, this card is then exchanged with a card outside the board. This allows both players rotating access to all 5 movement cards in play!

The game is easy to learn thanks to its unique visual design.  It also allows for a high level of strategic gameplay with it's dynamic moveset. 

---

## Technologies 

Onitama was built using only vanilla Javascript (ES6) and CSS.  
  - [Aseprite](https://www.aseprite.org/) to create all card art
  - `Webpack` to bundle the source JS code
  - `npm` to manage project dependencies

---

## Gameplay

In Onitama, users will be able to:
  - Generate a random combination of (5) movement cards from the possible (16+)
  - Select and move their pawns on the 5x5 grid
  - Capture pawns (or be captured) as depicted in the movement cards
  - Play against a screen-shared opponent

In addition, this project includes:
  - How to play instructions and About section 
  - Gallery of all (16) possible movement cards

---

## Notable Design

The 5 movement cards are a populated randomly from a total set of 16.  As the movement is based on a rotational set of visual patterns, they presented several challenges during the design of the game.    
  - Card flip animations are responsive to initial game start and to card selection between turns.
  - Card flip used as 'sleight of hand' to assist in visually apparent card exchanges on the board.
  - Card selection highlights the active card that, when combined with a highlighted active pawn, depicts available moves as green spaces on the board. 
  - Opponent cards must be inverted and the movement pattern accurately depicted on the board for the current player's turn.

----

## Bonus
  - Add additional movement cards from print game expansions
  - Add additional piece type and game modes from print game expansions
  - Add Multiplayer functionality (remote)
  - Add AI with difficulty levels
  - Add card, piece capture, and game state animations

---

## Project Files Glossary
  - [WIP]

