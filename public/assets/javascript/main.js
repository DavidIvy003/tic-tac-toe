import $ from 'jquery'
import Game from './game'

$(() => {

  let game
  function toggleTraining() {
    game = new Game('computer', 'computer')
  }

  $(document).on('click', '.end-training', (event) => {
    game.endTraining()
  })

  $(document).on('click', '.continue-training', (event) => {
    game.continueTraining()
  })

  toggleTraining()
});
