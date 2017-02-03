class Computer {
  move(options) {
  	return options[Math.floor(Math.random() * options.length)]
  }
}

module.exports = Computer
