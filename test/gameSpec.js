import assert from 'assert'
import sinon from 'sinon'
import game from '../public/assets/javascript/game'
import { X, O, BLANK } from '../public/assets/javascript/config'

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

  describe('selectSquare', function() {
    it('should update the board', function() {
      sinon.spy(Game.board, 'update')
      Game.selectSquare(4);
      assert.equal(Game.board.update.getCall(0).args[0], 4);
      assert.equal(Game.board.update.getCall(0).args[1], 'x');
    });

    it('should change turns', function() {
      assert.equal(Game.currentPlayerIndex, 1);
      Game.selectSquare(4);
      assert.equal(Game.currentPlayerIndex, 0);
    });
  });

  describe('choiceOptions', function() {
    it('should return options for an empty board', function() {
      assert.deepEqual(Game.choiceOptions(), [0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('should return options for a single option board', function() {
      Game.board.state = [X, O, X, O, X, O, X, O, BLANK];
      assert.deepEqual(Game.choiceOptions(), [8]);
    });
  });

});
