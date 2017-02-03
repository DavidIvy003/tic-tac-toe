import $ from 'jquery'
import Game from './game'

$(() => {

  function toggleTraining() {
    const game = new Game('computer')
  }

  toggleTraining()
});
