import $ from 'jquery'

class Player {
  constructor(opt) {
    this.symbol = opt.symbol
    this.game = opt.game
    this.bindEvents()
    this.wins = 0
    this.loses = 0
    this.draw = 0
  }
  startTurn() {
    this.turn = true
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
  bindEvents() {
    $(document).on('click', '.square', (event) => {
      if (!this.myTurn()) return
      let choice = event.target.dataset.choice
      this.game.selectSquare(choice)
    })
  }
}

module.exports = Player
