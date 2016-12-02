import Board from './board'
import Player from './player'

function Game(opt = {}) {

}

Game.prototype = {
  players: [],
  setup() {
    this.board = new Board()
    this.players.push(new Player({ symbol: 'o' }))
    this.players.push(new Player({ symbol: 'x' }))

    this.currentPlayerIndex = 0
  },
  currentPlayer() {
    return this.players[this.currentPlayerIndex]
  },
  nextTurn() {
    if (board.checkForWin()) {
      // Handle win
    }
    this.nextPlayer()
  },
  nextPlayer() {
    this.currentPlayerIndex = this.currentPlayerIndex == 0 ? 1 : 0
  },
  selectSquare(position) {
    this.board.update(position, this.currentPlayerIndex)
    nextTurn()
  }
}
