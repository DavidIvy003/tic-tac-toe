import { X, O, BLANK } from './config'

const WIN_POINTS = 10
const LOSE_POINTS = -10
const TIE_POINTS = -1

class Trainer {
  constructor(opt) {
  }
  win(computer, history, computerSymbol) {
    rewardComputer(computer, history, computerSymbol, WIN_POINTS)
  }
  lose(computer, history, computerSymbol) {
    rewardComputer(computer, history, computerSymbol, LOSE_POINTS)
  }
  tie(computer, history, computerSymbol) {
    // rewardComputer(computer, history, computerSymbol, TIE_POINTS)
  }
  hashState(state, computerSymbol) {
    return stringifyState(state, computerSymbol)
  }
}

function stringifyState(state, computerSymbol) {
  return state.map((symbol) => {
    if (!symbol) return '0'
    if (symbol === computerSymbol) return '1'
    return '2'
  }).join('')
}

function rotateIndex(a) {
  const y = a % 3
  const x = (a - y) / 3
  let y1
  if (x === 0) {
    y1 = 2
  } else if (x === 1) {
    y1 = 1
  } else {
    y1 = 0
  }
  const x1 = y
  return x1 * 3 + y1
}

function rewardComputer(computer, history, computerSymbol, points) {
  let state, choice, turn = 0
  history.forEach((event) => {
    if (event.symbol === computerSymbol) {
      state = event.state
    } else {
      state = reverseBoard(event.state)
      points = -points
    }
    choice = event.choice
    const score = points > 0 ? points - turn : points + turn
    for (let i = 0; i < 4; i++) {
      computer.reward(stringifyState(state, computerSymbol), choice, score)
      state = rotateBoard(state)
      choice = rotateIndex(choice)
    }
    turn ++
  })
}

function reverseBoard(state) {
  return state.map(pos => {
    if (pos) {
      return pos === X ? O : X
    }
  })
}

function rotateBoard(state) {
  let rotatedBoard = []
  state.forEach((pos, index) => {
    rotatedBoard[rotateIndex(index)] = pos
  })
  return rotatedBoard
}

export default Trainer
