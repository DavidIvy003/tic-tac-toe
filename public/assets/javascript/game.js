import Board from './board'
import Player from './player'

class Game {
  constructor() {
    this.players = []
    this.board = new Board()
    this.players.push(new Player({ symbol: 'o' }))
    this.players.push(new Player({ symbol: 'x' }))

    this.currentPlayerIndex = 0

    this.nextTurn()

  }
  currentPlayer() {
    return this.players[this.currentPlayerIndex]
  }
  nextTurn() {
    if (this.board.checkForWin()) {
      // Handle win
    }
    this.nextPlayer()
  }
  nextPlayer() {
    this.currentPlayerIndex = this.currentPlayerIndex == 0 ? 1 : 0
    console.log('player', this.currentPlayerIndex)
  }
  selectSquare(position) {
    this.board.update(position, this.currentPlayerIndex)
    nextTurn()
  }
}

module.exports = Game;
