import $ from 'jquery'
import Computer from './computer'
import trainer from './trainer'

const Trainer = new trainer()

class Player {
  constructor(opt) {
    this.symbol = opt.symbol
    this.game = opt.game
    this.type = opt.type
    this.bindEvents()
    this.wins = 0
    this.loses = 0
    this.draws = 0
    this.computer = new Computer({ symbol: this.symbol, type: this.type })
  }
  startTurn() {
    this.turn = true
    this.makeMove()
  }
  endTurn() {
    this.turn = false
  }
  myTurn() {
    return this.turn
  }
  youWin() {
    this.wins++
    Trainer.win(this.computer, this.game.getBoardHistory(), this.symbol)
  }
  youLose() {
    this.loses++
    Trainer.lose(this.computer, this.game.getBoardHistory(), this.symbol)
  }
  youTie() {
    this.draws++
  }
  makeMove() {
    if (this.type === 'human') return
    let choice
    let options = this.game.choiceOptions()
    choice = this.computer.move(options)
    this.game.selectSquare(choice)
  }
  bindEvents() {
    $(document).on('click', '.square', (event) => {
      if (!this.myTurn()) return
      let choice = event.target.dataset.choice
      this.game.selectSquare(choice)
    })
  }
}

module.exports = Player
