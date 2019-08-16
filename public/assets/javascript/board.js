import $ from 'jquery'

class Board {
  constructor() {
    this.state = new Array(9)
    this.reset()
  }
  reset() {
    var newState = [...this.state]
    this.state = newState.fill(undefined)
    this.stack = []
    this.updateBoard()
  }
  checkForWin() {
    return _checkRows(this.state) || _checkColumns(this.state) || _checkDiagonals(this.state) || false
  }
  checkForTie() {
    return !this.state.includes(undefined)
  }
  update(position, symbol) {
    if (this.state[position]) return false
    this.stack.push({ state: this.state, choice: position, symbol: symbol })
    var newState = [...this.state]
    newState[position] = symbol
    this.state = newState
    this.updateBoard()
    return true
  }
  updateBoard() {
    const x = "\u2715"
    const o = "\u25CB"
    this.state.forEach((value, index) => {
      const $square = $('.square[data-choice="' + index + '"]')
      $square.removeClass('x')
      $square.removeClass('o')
      if (!value) return $square.text('')
      if (value === "X") {
        $square.addClass('x')
        $square.text(x)
      } else {
        $square.addClass('o')
        $square.text(o)
      }
    })
  }
}

function _checkRows(state) {
  for(var i = 0; i <= 6; i = i + 3) {
    if(state[i] !== undefined && state[i] === state[i + 1] && state[i + 1] == state[i + 2]) {
      return true;
    }
  }
}

function _checkColumns(state) {
  for(var i = 0; i <= 2; i++) {
    if(state[i] !== undefined && state[i] === state[i + 3] && state[i + 3] == state[i + 6]) {
      return true;
    }
  }
}

function _checkDiagonals(state) {
  for(var i = 0, j = 4; i <= 2 ; i = i + 2, j = j - 2) {
    if(state[i] !== undefined && state[i] == state[i + j] && state[i + j] === state[i + 2*j]) {
      return true;
    }
  }
}

export default Board
