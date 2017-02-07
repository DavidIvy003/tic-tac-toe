const WIN_POINTS = 10
const LOSE_POINTS = -10
const TIE_POINTS = 0

class Trainer {
  constructor(opt) {
  }
  win(computer, history, computerSymbol) {
    this.rewardComputer(computer, history, computerSymbol, WIN_POINTS)
  }
  lose(computer, history, computerSymbol) {
    this.rewardComputer(computer, history, computerSymbol, LOSE_POINTS)
  }
  rewardComputer(computer, history, computerSymbol, points) {
    history.forEach((event) => {
      if (event.symbol === computerSymbol) {
        computer.reward(event.state, event.choice, points)
      }
    })
  }
}

module.exports = Trainer
