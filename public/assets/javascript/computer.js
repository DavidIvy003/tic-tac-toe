class Computer {
  constructor(opt) {
    this.type = opt.type
    this.stack = {}
  }
  move(options) {
    return options[Math.floor(Math.random() * options.length)]
  }
  reward(state, choice, points) {
    const stateKey = this.stringifyState(state, choice)
    if (!this.stack[stateKey]) {
      this.stack[stateKey] = 0
    }
    this.stack[stateKey] += points
    console.log(this.stack)
  }
  stringifyState(state, choice) {
    return state.map((symbol) => {
      if (!symbol) return '0'
      if (symbol === this.symbol) return '1'
      return '2'
    }).join('') + choice
  }
  getStateReward(state, choice) {
    const stateKey = this.stringifyState(state, choice)
    return stack[stateKey]
  }
}

module.exports = Computer
