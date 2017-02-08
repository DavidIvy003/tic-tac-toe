class Computer {
  constructor(opt) {
    this.type = opt.type
    this.stack = {}
  }
  move(state, options) {
    if (this.type === 'random') {
      return options[Math.floor(Math.random() * options.length)]
    }
    return this.getBestOption(state, options)
  }
  reward(state, choice, points) {
    const stateKey = this.stringifyState(state, choice)
    if (!this.stack[stateKey]) {
      this.stack[stateKey] = 0
    }
    this.stack[stateKey] += points
  }
  getScore(state, option) {
    const score = this.stack[this.stringifyState(state, option)]
    return score ? score : 0
  }
  getBestOption(state, options) {
    const optionScores = options.map((option) => {
      return {
        option: option,
        score: this.getScore(state, option)
      }
    })
    return optionScores.sort((a, b) => b.score - a.score)[0].option
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
    return this.stack[stateKey]
  }
}

export default Computer
