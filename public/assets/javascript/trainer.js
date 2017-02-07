const WIN_POINTS = 10
const LOSE_POINTS = -10
const TIE_POINTS = 0

class Trainer {
  constructor(opt) {
  }
  win(computer, history, computerSymbol) {
    history.forEach((event) => {
      if (event.symbol === computerSymbol) {
        computer.reward(event.state, event.choice, WIN_POINTS)
      }
    })
  }
}

module.exports = Trainer
