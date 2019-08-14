import $ from 'jquery'
import Game from './game'

$(() => {

  let game
  let $endTrainingButton = $(document).find('.end-training')
  let $startTrainingButton = $(document).find('.continue-training')
  let $debugButton = $(document).find('.debug')
  let $useTrainedDatasetButton = $(document).find('.use-trained-dataset')
  let $useUntrainedDatasetButton = $(document).find('.use-untrained-dataset')

  function createGame() {
    game = new Game('computer', 'computer')
    $startTrainingButton.hide()
    $useUntrainedDatasetButton.hide()
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

  $useTrainedDatasetButton.click((event) => {
    game.useTrainedDataset()
    $useUntrainedDatasetButton.show()
    $useTrainedDatasetButton.hide()
  })

  $useUntrainedDatasetButton.click((event) => {
    game.useUntrainedDataset()
    $useTrainedDatasetButton.show()
    $useUntrainedDatasetButton.hide()
  })

  $debugButton.click((event) => {
    game.debug()
  })

  createGame()
});
