import $ from 'jquery'
import Game from './game'

$(() => {

  let game
  let $endTrainingButton = $(document).find('.end-training')
  let $startTrainingButton = $(document).find('.continue-training')
  let $debugButton = $(document).find('.debug')

  function createGame() {
    game = new Game('computer', 'computer')
    $startTrainingButton.hide()
  }

  $endTrainingButton.click((event) => {
    game.endTraining()
    $endTrainingButton.hide()
    $startTrainingButton.show()
  })

  $startTrainingButton.click((event) => {
    game.continueTraining()
    $endTrainingButton.show()
    $startTrainingButton.hide()
  })

  $debugButton.click((event) => {
    game.debug()
  })

  createGame()
});
