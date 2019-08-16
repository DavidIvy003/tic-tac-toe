import $ from 'jquery'
import Game from './game'

$(() => {

  let game
  let $endTrainingButton = $(document).find('.end-training')
  let $startTrainingButton = $(document).find('.start-training')
  let $continueTrainingButton = $(document).find('.continue-training')
  let $debugButton = $(document).find('.debug')
  let $useTrainedDatasetButton = $(document).find('.use-trained-dataset')
  let $useUntrainedDatasetButton = $(document).find('.use-untrained-dataset')
  let $welcomeCard = $(document).find('.welcome-card')
  let $trainingCard = $(document).find('.training-card')
  let $debuggerCard = $(document).find('.debugger-card')
  let $statsCard = $(document).find('.stats-card')

  function createGame() {
    game = new Game('computer', 'computer')
    game.endTraining()
    $useUntrainedDatasetButton.hide()
  }

  $startTrainingButton.click((event) => {
    game.continueTraining()
    $welcomeCard.hide()
    $trainingCard.show()
    $debuggerCard.show()
    $continueTrainingButton.hide()
  })

  $endTrainingButton.click((event) => {
    game.endTraining()
    $endTrainingButton.hide()
    $continueTrainingButton.show()
  })

  $continueTrainingButton.click((event) => {
    game.continueTraining()
    $endTrainingButton.show()
    $continueTrainingButton.hide()
  })

  $useTrainedDatasetButton.click((event) => {
    game.useTrainedDataset()
    $useUntrainedDatasetButton.show()
    $statsCard.hide()
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
