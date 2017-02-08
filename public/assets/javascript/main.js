import $ from 'jquery'
import Game from './game'

$(() => {

  let game
  function toggleTraining() {
    game = new Game('computer', 'random')
  }

  $(document).on('click', '.end-training', (event) => {
    game.endTraining()
  })

  toggleTraining()
});
