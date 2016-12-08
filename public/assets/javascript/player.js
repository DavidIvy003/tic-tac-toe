import $ from 'jquery'

class Player {
  constructor(opt) {
    this.symbol = opt.symbol
    this.game = opt.game
    this.type = opt.type
    this.bindEvents()
    this.wins = 0
    this.loses = 0
    this.draw = 0
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
  }
  youLose() {
    this.loses++
  }
  youTie() {
    this.draw++
  }
  makeMove() {
    if (this.type === 'human') return
    let options = this.game.choiceOptions()
    if (this.type === 'random') {
      let choice = options[Math.floor(Math.random() * options.length)]
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
