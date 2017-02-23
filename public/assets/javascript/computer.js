class Computer {
  constructor(opt) {
    this.symbol = opt.symbol
    this.type = opt.type
    this.stack = {}
    this.certainty = 0
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
    const topChoice = optionScores.sort((a, b) => b.score - a.score)[0]
    let choices = optionScores.filter((option) => option.score === topChoice.score)
    if (Math.random() * this.certainty < 1) {
      choices = optionScores
    }
    const choice = choices[Math.floor(Math.random() * choices.length)]
    return choice.option
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
