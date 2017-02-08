import Board from './board'
import Player from './player'
import { X, O, BLANK } from './config'

class Game {
  constructor(player1Type = 'random', player2Type = 'human') {
    this.gamesPlayed = 0
    this.players = []
    this.board = new Board()
    this.players.push(new Player({ symbol: X, type: player1Type, game: this }))
    this.players.push(new Player({ symbol: O, type: player2Type, game: this }))

    this.currentPlayerIndex = 0

    this.nextTurn()
  }
  reset() {
    console.log(this.gamesPlayed)
    this.board.reset()
  }
  endTraining() {
    this.players[1] = new Player({ symbol: O, type: 'human', game: this })
    this.reset()
  }
  currentPlayer() {
    return this.players[this.currentPlayerIndex]
  }
  opposingPlayer() {
    return this.players[this.opposingPlayerIndex()]
  }
  opposingPlayerIndex() {
    return this.currentPlayerIndex === 0 ? 1 : 0
  }
  nextTurn() {
    if (this.board.checkForWin()) {
      // Handle win
      console.log('winner winner chicken dinner')
      this.currentPlayer().youWin()
      this.opposingPlayer().youLose()
      this.gamesPlayed++
      this.reset()
    } else if (this.board.checkForTie()) {
      console.log("it's a pizza tie")
      this.currentPlayer().youTie()
      this.opposingPlayer().youTie()
      this.gamesPlayed++
      this.reset()
    }
    this.nextPlayer()
  }
  nextPlayer() {
    this.currentPlayer().endTurn(this.board.state)
    this.currentPlayerIndex = this.opposingPlayerIndex()
    setTimeout(() => {
      this.currentPlayer().startTurn(this.board.state)
    })
  }
  selectSquare(position) {
    let nextTurn = this.board.update(position, this.currentPlayer().symbol)
    if (nextTurn) this.nextTurn()
  }
  choiceOptions() {
    return this.board.state.map((a, i) => { if (!a) return i }).filter((a) => a !== undefined)
  }
  getBoardHistory() {
    return this.board.stack
  }
}

module.exports = Game
