class Computer {
  constructor(opt) {
    this.type = opt.type
    this.stack = {}
    this.certainty = 0
    this.inDebugMode = false
  }
  move(state, options) {
    if (this.type === 'random') {
      return options[Math.floor(Math.random() * options.length)]
    }
    return this.getBestOption(state, options)
  }
  reward(state, choice, points) {
    const stateKey = state + choice
    if (!this.stack[stateKey]) {
      this.stack[stateKey] = 0
    }
    this.stack[stateKey] += points
  }
  debug() {
    this.inDebugMode = !this.inDebugMode
  }
  getScore(state, option) {
    const score = this.stack[state + option]
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
    if (this.certainty < 30 && Math.random() * this.certainty < 1) {
      choices = optionScores
      console.log(`picked random: ${this.certainty}`)
    }
    const choice = choices[Math.floor(Math.random() * choices.length)]
    if (this.inDebugMode) {
      debugger
    }
    return choice.option
  }
  getStateReward(state, choice) {
    const stateKey = state + choice
    return this.stack[stateKey]
  }
}

export default Computer
