# tic-tac-toe
This is a version of tic tac toe where the computer uses reinforcement learning to improve outcome. The motivation behind this project is to better understand reinforcement learning and the pros and cons of this type of machine learning.

## Reinforcement Learning
This type of learning emulates the way humans learn. You did something good, you get a cookie.  You did something bad, you get grounded. The computer is treated the same way. It plays through thousands of games against itself to learn how to win.

## How It Works
The computer keeps track of every state it has seen and every choice it has made and a score associated with that choice. If a move led to a win, it is rewarded for that move and the score will increase. If it led to a loss, it is puninished and the score will decrease. If it lead to a tie, the score will gently increase.

The computer will make a random move some percentage of times based on the certainty of the move. This allows for the computer to explore the board to find better moves while learning. As the computer has seen more games, that certainty increases and the random move choice decreases.

## Getting Started

```
$ npm install
$ npm run watch
$ npm run watch-css
$ open public/index.html
```

Click "End Training" to play against the computer at any point. Allow the computer to run until the certainty passes 30 to play the optimal computer.

Click "Debug" to see the choices of the previous computer move and see why it made that move.  This also adds a debugger to the dev console to explore the state.

## Pitfalls
The computer isn't training against an ideal opponent, instead training against a dumber version of itself. If the dumber version doesn't capitalize on a mistake, it will lead to the computer making the same mistake repeated and being rewarded for it.
