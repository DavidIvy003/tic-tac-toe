class Computer {
  constructor(opt) {
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
}

module.exports = Computer
