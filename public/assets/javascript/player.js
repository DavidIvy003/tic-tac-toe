import $ from 'jquery'
import computer from './computer'
import trainer from './trainer'

const Computer = new computer()
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
    Computer.symbol = this.symbol
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
    Trainer.win(this.game.getBoardHistory(), Computer, this.symbol)
  }
  youLose() {
    this.loses++
  }
  youTie() {
    this.draws++
  }
  makeMove() {
    if (this.type === 'human') return
    let choice
    let options = this.game.choiceOptions()
    if (this.type === 'random') {
      choice = options[Math.floor(Math.random() * options.length)]
    } else if (this.type === 'computer') {
      choice = Computer.move(options)
    }
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
