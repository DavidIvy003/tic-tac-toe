import assert from 'assert'
import game from '../public/assets/javascript/game'
import sinon from 'sinon'

describe('Game', function() {
  let Game
  beforeEach(() => {
    Game = new game('human')
  })

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

    it('should alert players on game win', function() {
      const player1YouWinSpy = sinon.spy()
      const player1YouLoseSpy = sinon.spy()
      const player2YouWinSpy = sinon.spy()
      const player2YouLoseSpy = sinon.spy()
      Game.players[0].youWin = player1YouWinSpy
      Game.players[0].youLose = player1YouLoseSpy
      Game.players[1].youWin = player2YouWinSpy
      Game.players[1].youLose = player2YouLoseSpy
      Game.board.checkForWin = () => true // Game over

      Game.nextTurn()
      sinon.assert.notCalled(player1YouWinSpy)
      sinon.assert.calledOnce(player1YouLoseSpy)

      sinon.assert.calledOnce(player2YouWinSpy)
      sinon.assert.notCalled(player2YouLoseSpy)
    });

    it('should alert players on game tie', function() {
      const player1YouTieSpy = sinon.spy()
      const player2YouTieSpy = sinon.spy()
      Game.players[0].youTie = player1YouTieSpy
      Game.players[1].youTie = player2YouTieSpy
      Game.board.checkForTie = () => true // Game over

      Game.nextTurn()
      sinon.assert.calledOnce(player1YouTieSpy)
      sinon.assert.calledOnce(player2YouTieSpy)
    });
  });

});
