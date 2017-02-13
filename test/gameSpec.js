import assert from 'assert'
import sinon from 'sinon'
import game from '../public/assets/javascript/game'
import { X, O, BLANK } from '../public/assets/javascript/config'

describe('Game', () => {
  let Game
  beforeEach(() => {
    Game = new game('human')
  })

  describe('players', () => {
    it('should create two players', () => {
      assert.equal(Game.players.length, 2);
      assert.equal(Game.currentPlayerIndex, 1);
    });
  });

  describe('nextTurn', function(done) {
    it('should change players', () => {
      assert.equal(Game.currentPlayerIndex, 1);
      Game.nextTurn()
    });

    it('should alert players on game win', () => {
      sinon.spy(Game.players[0], 'youWin')
      sinon.spy(Game.players[0], 'youLose')
      sinon.spy(Game.players[1], 'youWin')
      sinon.spy(Game.players[1], 'youLose')
      Game.board.checkForWin = () => true // Game over

      Game.nextTurn()
      sinon.assert.notCalled(Game.players[0].youWin)
      sinon.assert.calledOnce(Game.players[0].youLose)
      sinon.assert.calledOnce(Game.players[1].youWin)
      sinon.assert.notCalled(Game.players[1].youLose)
    });

    it('should alert players on game tie', () => {
      sinon.spy(Game.players[0], 'youTie')
      sinon.spy(Game.players[1], 'youTie')
      Game.board.checkForTie = () => true // Game over

      Game.nextTurn()
      sinon.assert.calledOnce(Game.players[0].youTie)
      sinon.assert.calledOnce(Game.players[1].youTie)
    });
  });

  describe('selectSquare', () => {
    it('should update the board', () => {
      sinon.spy(Game.board, 'update')
      Game.selectSquare(4);
      assert.equal(Game.board.update.getCall(0).args[0], 4);
      assert.equal(Game.board.update.getCall(0).args[1], O);
    });

    it('should change turns', () => {
      assert.equal(Game.currentPlayerIndex, 1);
      Game.selectSquare(4);
      assert.equal(Game.currentPlayerIndex, 0);
    });
  });

  describe('choiceOptions', () => {
    it('should return options for an empty board', () => {
      assert.deepEqual(Game.choiceOptions(), [0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('should return options for a single option board', () => {
      Game.board.state = [X, O, X, O, X, O, X, O, BLANK];
      assert.deepEqual(Game.choiceOptions(), [8]);
    });
  });

});
