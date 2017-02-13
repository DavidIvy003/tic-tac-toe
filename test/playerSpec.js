import assert from 'assert'
import sinon from 'sinon'
import player from '../public/assets/javascript/player'
import game from '../public/assets/javascript/game'

describe('Game', () => {

  describe('human', () => {
    let Player, Game
    const selectSquareSpy = sinon.spy()

    beforeEach(() => {
      Game = new game('human')
      sinon.spy(Game, 'selectSquare')
      Player = new player({ symbol: 'o', type: 'human', game: Game })
    })

    it('should init values', () => {
      assert.equal(Player.symbol, 'o')
      assert.equal(Player.wins, 0)
      assert.equal(Player.loses, 0)
      assert.equal(Player.draws, 0)
    })

    it('should not call select square on start turn', () => {
      assert(!Player.myTurn())
      Player.startTurn()
      assert(Player.myTurn())
      sinon.assert.notCalled(Game.selectSquare)
    })

    it('should end a player turn', () => {
      Player.endTurn()
      assert(!Player.myTurn())
    })

    it('should increment wins', () => {
      assert.equal(Player.wins, 0)
      Player.youWin()
      assert.equal(Player.wins, 1)
    })

    it('should increment loses', () => {
      assert.equal(Player.loses, 0)
      Player.youLose()
      assert.equal(Player.loses, 1)
    })

    it('should increment ties', () => {
      assert.equal(Player.draws, 0)
      Player.youTie()
      assert.equal(Player.draws, 1)
    })
  })

  describe('random', () => {
    let Player, Game

    beforeEach(() => {
      Game = new game('human')
      sinon.spy(Game, 'selectSquare')
      Player = new player({ symbol: 'x', type: 'random', game: Game })
    })

    it('should init values', () => {
      assert.equal(Player.symbol, 'x')
      assert.equal(Player.wins, 0)
      assert.equal(Player.loses, 0)
      assert.equal(Player.draws, 0)
    })

    it('should call select square on start turn', () => {
      assert(!Player.myTurn())
      Player.startTurn()
      assert(Player.myTurn())
      sinon.assert.calledOnce(Game.selectSquare)
    })
  })

})
