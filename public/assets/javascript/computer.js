import $ from 'jquery'
import state from './state'

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
    if (!this.stack[state]) {
      this.stack[state] = {
        'timesSeen': 0,
        'options': {},
      }
    }
    if (!this.stack[state]['options'][choice]) {
      this.stack[state]['options'][choice] = {
        'score': 0,
        'average': 0,
        'timesChosen': 0,
      }
    }
    console.log('reward', state, choice, points)
    this.stack[state]['timesSeen']++
    this.stack[state]['options'][choice]['timesChosen']++
    this.stack[state]['options'][choice]['score'] += points
    this.stack[state]['options'][choice]['average'] = this.stack[state]['options'][choice]['score'] / this.stack[state]['options'][choice]['timesChosen']
  }
  setCertainty(wins, certaintyRate) {
    const certainty = wins / certaintyRate
    this.certainty = certainty > this.certainty ? certainty : this.certainty
  }
  debug() {
    this.inDebugMode = !this.inDebugMode
  }
  getScore(state, option) {
    const scores = (this.stack[state] || {})['options']
    const score = (scores || {})[option]
    return score ? score['average'] : 1000 // Never picked the choice? Explore that option
  }
  getBestOption(state, options) {
    console.log(state, options)
    const optionScores = options.map((option) => {
      return {
        option: option,
        score: this.getScore(state, option)
      }
    })
    const topChoice = optionScores.sort((a, b) => b.score - a.score)[0]
    let choices = optionScores.filter((option) => option.score === topChoice.score)
    let randomText = ''
    if (this.certainty < 30 && Math.random() * this.certainty < 1) {
      choices = optionScores
      console.log(`picked random: ${this.certainty}`)
      randomText = 'Picked Random'
    }
    const choice = choices[Math.floor(Math.random() * choices.length)]
    const fullStack = this.stack
    const stack = this.stack[state] || {}

    console.log(state, stack, topChoice, choice)
    if (this.inDebugMode) {
      debugger
      $('.debug-stats .debug-state').html(state)
      $('.debug-stats .debug-timesseen').html(stack['timesSeen'])
      $('.debug-stats .debug-random').html(randomText)
      const listSelector = $('.debug-stack')
      listSelector.empty()
      Object.keys(stack['options'] || {}).sort().forEach((option) =>
        listSelector.append(`<li>${option}: ${stack['options'][option]['average']}</li>`)
      )
    }
    return choice.option
  }
}

export default Computer
