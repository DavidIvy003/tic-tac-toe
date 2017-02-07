const X = 'X'
const O = 'O'
const BLANK = BLANK

export default [{
  state: [BLANK, BLANK, BLANK,
          BLANK, BLANK, BLANK,
          BLANK, BLANK, BLANK],
  choice: 0,
  symbol: X
}, {
  state: [X, BLANK, BLANK,
          BLANK, BLANK, BLANK,
          BLANK, BLANK, BLANK],
  choice: 4,
  symbol: O
}, {
  state: [X, BLANK, BLANK,
          BLANK, O, BLANK,
          BLANK, BLANK, BLANK],
  choice: 8,
  symbol: X
}, {
  state: [X, BLANK, BLANK,
          BLANK, O, BLANK,
          BLANK, BLANK, X],
  choice: 6,
  symbol: O
}, {
  state: [X, BLANK, BLANK,
          BLANK, O, BLANK,
          O, BLANK, X],
  choice: 2,
  symbol: X
}, {
  state: [X, BLANK, X,
          BLANK, O, BLANK,
          BLANK, BLANK, X],
  choice: 1,
  symbol: O
}, {
  state: [X, O, X,
          BLANK, O, BLANK,
          BLANK, BLANK, X],
  choice: 5, // Winning choice
  symbol: X
}]