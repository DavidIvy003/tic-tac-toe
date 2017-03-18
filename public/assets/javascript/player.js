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
    this.computer = new Computer({ type: this.type })
  }
  startTurn(state = []) {
    this.turn = true
    this.makeMove(state)
  }
  endTurn(state) {
    this.turn = false
  }
  myTurn() {
    return this.turn
  }
  youWin() {
    this.wins++
    console.log(`${this.symbol} wins: ${this.wins}`)
    this.computer.certainty = this.wins / 50
    Trainer.win(this.computer, this.game.getBoardHistory(), this.symbol)
  }
  youLose() {
    this.loses++
    Trainer.lose(this.computer, this.game.getBoardHistory(), this.symbol)
  }
  youTie() {
    this.draws++
    Trainer.tie(this.computer, this.game.getBoardHistory(), this.symbol)
  }
  debug() {
    this.computer.debug()
  }
  makeMove(state) {
    if (this.type === 'human') return
    let options = this.game.choiceOptions()
    let choice = this.computer.move(Trainer.hashState(state, this.symbol), options)
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

export default Player
