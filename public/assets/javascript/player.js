import $ from 'jquery'

class Player {
  constructor(opt) {
    this.symbol = opt.symbol
    this.game = opt.game
    this.bindEvents()
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
  bindEvents() {
    $(document).on('click', '.square', (event) => {
      if (!this.myTurn()) return
      let choice = event.target.dataset.choice
      this.game.selectSquare(choice)
    })
  }
}

module.exports = Player
