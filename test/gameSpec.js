import assert from 'assert'
import game from '../public/assets/javascript/game'

describe('Game', function() {
  const Game = new game('human')

  describe('players', function() {
    it('should create two players', function() {
      assert.equal(Game.players.length, 2);
      assert.equal(Game.currentPlayerIndex, 1);
    });
  });

  describe('nextTurn', function() {
    it('should change players', function() {
      assert.equal(Game.currentPlayerIndex, 1);
      Game.nextTurn();
      assert.equal(Game.currentPlayerIndex, 0);
    });
  });

});
