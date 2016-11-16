import Board from './board'
import Player from './player'

function Game(opt = {}) {

}

Game.prototype = {
  players: [],
  setup() {
    this.board = new Board()
    this.players.push(new Player())
    this.players.push(new Player())

    this.currentPlayer = 0
  }
}
