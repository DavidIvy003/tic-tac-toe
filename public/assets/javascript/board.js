'use strict';

const Board = function() {

}

Board.prototype = {
  setup() {
    this.state = Array(8);
  },
  checkForWin() {
    return _checkRows(this.state) || _checkColumns(this.state) || _checkDiagonals(this.state) || false
  },
  update(position, symbol) {
    this.state[position] = symbol
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

module.exports = Board;
