import assert from 'assert'
import { X, O, BLANK } from '../public/assets/javascript/config'
import board from '../public/assets/javascript/board'

describe('Board', () => {
  const Board = new board()

  describe('checkForWin', () => {
    it('should correctly check top row', () => {
      Board.reset()

      assert.deepEqual(Board.state, [BLANK, BLANK, BLANK,
                                     BLANK, BLANK, BLANK,
                                     BLANK, BLANK, BLANK])
    })
  })

  describe('checkForWin', () => {
    describe('checkRows', () => {
      it('should correctly check top row', () => {
        Board.state = [O, O, O,
                       BLANK, BLANK, BLANK,
                       BLANK, BLANK, BLANK]

        assert.equal(Board.checkForWin(), true)
      })
      it('should correctly check middle row', () => {
        Board.state = [BLANK, BLANK, BLANK,
                       O, O, O,
                       BLANK, BLANK, BLANK]

        assert.equal(Board.checkForWin(), true)
      })
      it('should correctly check bottom row', () => {
        Board.state = [BLANK, BLANK, BLANK,
                       BLANK, BLANK, BLANK,
                       X, X, X]

        assert.equal(Board.checkForWin(), true)
      })
      it('should correctly identify no win', () => {
        Board.state = [BLANK, BLANK, BLANK,
                       BLANK, BLANK, BLANK,
                       BLANK, O, O]
        assert.equal(Board.checkForWin(), false)
      })
    })

    describe('checkColumns', () => {
      it('should correctly check first column', () => {
        Board.state = [O, BLANK, BLANK,
                       O, BLANK, BLANK,
                       O, BLANK, BLANK]

        assert.equal(Board.checkForWin(), true)
      })
      it('should correctly check middle row', () => {
        Board.state = [BLANK, O, BLANK,
                       BLANK, O, BLANK,
                       BLANK, O, BLANK]

        assert.equal(Board.checkForWin(), true)
      })
      it('should correctly check bottom row', () => {
        Board.state = [BLANK, BLANK, X,
                       BLANK, BLANK, X,
                       BLANK, BLANK, X]

        assert.equal(Board.checkForWin(), true)
      })
      it('should correctly identify no win', () => {
        Board.state = [BLANK, BLANK, BLANK,
                       BLANK, O, BLANK,
                       BLANK, O, BLANK]
        assert.equal(Board.checkForWin(), false)
      })
    })

    describe('checkDiagonal', () => {
      it('should correctly check first column', () => {
        Board.state = [O, BLANK, BLANK,
                       BLANK, O, BLANK,
                       BLANK, BLANK, O]

        assert.equal(Board.checkForWin(), true)
      })
      it('should correctly check middle row', () => {
        Board.state = [BLANK, BLANK, O,
                       BLANK, O, BLANK,
                       O, BLANK, BLANK]

        assert.equal(Board.checkForWin(), true)
      })
      it('should correctly check middle row', () => {
        Board.state = [BLANK, BLANK, X,
                       BLANK, X, BLANK,
                       X, BLANK, BLANK]

        assert.equal(Board.checkForWin(), true)
      })
      it('should correctly identify no win', () => {
        Board.state = [BLANK, BLANK, BLANK,
                       BLANK, O, BLANK,
                       BLANK, O, O]
        assert.equal(Board.checkForWin(), false)
      })
    })
  })

  describe('checkForTie', () => {
    it('should correctly identify a tie', () => {
      Board.state = [X, X, O,
                     O, O, X,
                     X, O, O]
      assert.equal(Board.checkForTie(), true)
    })

    it('should correctly identify no tie', () => {
      Board.state = [X, X, BLANK,
                     O, O, X,
                     X, O, O]
      assert.equal(Board.checkForTie(), false)
    })
  })

  describe('update', () => {
    it('can update the state', () => {
      Board.reset()
      Board.update(0, X)
      assert.deepEqual(Board.state, [X, BLANK, BLANK,
                                     BLANK, BLANK, BLANK,
                                     BLANK, BLANK, BLANK])

      Board.update(8, O)
      assert.deepEqual(Board.state, [X, BLANK, BLANK,
                                     BLANK, BLANK, BLANK,
                                     BLANK, BLANK, O])
    })
  })

})
