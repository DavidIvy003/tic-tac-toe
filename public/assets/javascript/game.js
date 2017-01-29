import Board from './board'
import Player from './player'

class Game {
  constructor(computerType = 'random') {
    this.players = []
    this.board = new Board()
    this.players.push(new Player({ symbol: 'o', type: 'human', game: this }))
    this.players.push(new Player({ symbol: 'x', type: computerType, game: this }))

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
    } else if (this.board.checkForTie()) {
      console.log("it's a pizza tie")
      this.currentPlayer().youTie()
      this.currentPlayer().youTie()
      this.reset()
    }
    this.nextPlayer()
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
  choiceOptions() {
    return this.board.state.map((a, i) => { if (!a) return i }).filter(Number)
  }
}

module.exports = Game
