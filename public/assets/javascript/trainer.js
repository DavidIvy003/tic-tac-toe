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
    rewardComputer(computer, history, computerSymbol, TIE_POINTS)
  }
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
  let state, choice
  history.forEach((event) => {
    if (event.symbol === computerSymbol) {
      state = event.state
      choice = event.choice
      for (let i = 0; i < 4; i++) {
        computer.reward(state, choice, points)
        state = rotateBoard(state)
        choice = rotateIndex(choice)
      }
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
