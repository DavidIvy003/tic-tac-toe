import $ from 'jquery'

class Board {
  constructor() {
    this.state = new Array(9)
    this.reset()
  }
  reset() {
    this.state = this.state.map(() => undefined)
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
    this.state[position] = symbol
    this.updateBoard()
    return true
  }
  updateBoard() {
    this.state.forEach((value, index) => $('.square[data-choice="' + index +'"]').html(value ? value : ''))
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

module.exports = Board
