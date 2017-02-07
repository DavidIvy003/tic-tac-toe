import assert from 'assert'
import sinon from 'sinon'
import player from '../public/assets/javascript/player'
import game from '../public/assets/javascript/game'

describe('Game', function() {

  describe('human', function() {
    let Player, Game
    const selectSquareSpy = sinon.spy()

    beforeEach(function() {
      Game = new game('human')
      sinon.spy(Game, 'selectSquare')
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
      sinon.assert.notCalled(Game.selectSquare)
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

  describe('random', function() {
    let Player, Game

    beforeEach(function() {
      Game = new game('human')
      sinon.spy(Game, 'selectSquare')
      Player = new player({ symbol: 'x', type: 'random', game: Game })
    })

    it('should init values', function() {
      assert.equal(Player.symbol, 'x');
      assert.equal(Player.wins, 0);
      assert.equal(Player.loses, 0);
      assert.equal(Player.draws, 0);
    });

    it('should call select square on start turn', function() {
      assert(!Player.myTurn());
      Player.startTurn()
      assert(Player.myTurn());
      sinon.assert.calledOnce(Game.selectSquare)
    });
  });

});
