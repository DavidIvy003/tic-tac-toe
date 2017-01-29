const assert = require('assert');
const sinon = require('sinon');

describe('Game', function() {
  const player = require('../public/assets/javascript/player')
  const game = require('../public/assets/javascript/game')

  describe('human', function() {
    let Player
    const selectSquareSpy = sinon.spy()

    beforeEach(function() {
      const Game = new game
      Game.selectSquare = selectSquareSpy
      Player = new player({ symbol: 'o', type: 'human', game: Game })
    })

    it('should init values', function() {
      assert.equal(Player.symbol, 'o');
      assert.equal(Player.wins, 0);
      assert.equal(Player.loses, 0);
      assert.equal(Player.draws, 0);
    });

    it('should not call select square on start turn', function() {
      assert(!Player.myTurn());
      Player.startTurn()
      assert(Player.myTurn());
      sinon.assert.notCalled(selectSquareSpy)
    });

    it('should end a player turn', function() {
      Player.endTurn()
      assert(!Player.myTurn());
    });

    it('should increment wins', function() {
      assert.equal(Player.wins, 0);
      Player.youWin()
      assert.equal(Player.wins, 1);
    });

    it('should increment loses', function() {
      assert.equal(Player.loses, 0);
      Player.youLose()
      assert.equal(Player.loses, 1);
    });

    it('should increment ties', function() {
      assert.equal(Player.draws, 0);
      Player.youTie()
      assert.equal(Player.draws, 1);
    });
  });

});
