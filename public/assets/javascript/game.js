import Board from './board'
import Player from './player'

class Game {
  constructor() {
    this.players = []
    this.board = new Board()
    this.players.push(new Player({ symbol: 'o', game: this }))
    this.players.push(new Player({ symbol: 'x', game: this }))

    this.currentPlayerIndex = 0

    this.nextTurn()
  }
  reset() {
    this.board.reset()
  }
  currentPlayer() {
    return this.players[this.currentPlayerIndex]
  }
  nextTurn() {
    if (this.board.checkForWin()) {
      // Handle win
      console.log('winner winner chicken dinner')
      this.currentPlayer().youWin()
      this.currentPlayer().youLose()
      this.reset()
    }
    setTimeout(() => this.nextPlayer(), 10)
  }
  nextPlayer() {
    this.currentPlayer().endTurn()
    this.currentPlayerIndex = this.currentPlayerIndex === 0 ? 1 : 0
    this.currentPlayer().startTurn()
  }
  selectSquare(position) {
    let nextTurn = this.board.update(position, this.currentPlayer().symbol)
    if (nextTurn) this.nextTurn()
  }
}

module.exports = Game
