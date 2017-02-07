import assert from 'assert'
import { X, O, BLANK } from '../public/assets/javascript/config'
import board from '../public/assets/javascript/board'

describe('Board', function() {
  const Board = new board()

  describe('checkForWin', function() {
    it('should correctly check top row', function() {
      Board.reset();

      assert.deepEqual(Board.state, [BLANK, BLANK, BLANK,
                                     BLANK, BLANK, BLANK,
                                     BLANK, BLANK, BLANK]);
    });
  });

  describe('checkForWin', function() {
    describe('checkRows', function() {
      it('should correctly check top row', function() {
        Board.state = [O, O, O,
                       BLANK, BLANK, BLANK,
                       BLANK, BLANK, BLANK]

        assert.equal(Board.checkForWin(), true);
      });
      it('should correctly check middle row', function() {
        Board.state = [BLANK, BLANK, BLANK,
                       O, O, O,
                       BLANK, BLANK, BLANK]

        assert.equal(Board.checkForWin(), true);
      });
      it('should correctly check bottom row', function() {
        Board.state = [BLANK, BLANK, BLANK,
                       BLANK, BLANK, BLANK,
                       X, X, X]

        assert.equal(Board.checkForWin(), true);
      });
      it('should correctly identify no win', function() {
        Board.state = [BLANK, BLANK, BLANK,
                       BLANK, BLANK, BLANK,
                       BLANK, O, O]
        assert.equal(Board.checkForWin(), false);
      });
    });

    describe('checkColumns', function() {
      it('should correctly check first column', function() {
        Board.state = [O, BLANK, BLANK,
                       O, BLANK, BLANK,
                       O, BLANK, BLANK]

        assert.equal(Board.checkForWin(), true);
      });
      it('should correctly check middle row', function() {
        Board.state = [BLANK, O, BLANK,
                       BLANK, O, BLANK,
                       BLANK, O, BLANK]

        assert.equal(Board.checkForWin(), true);
      });
      it('should correctly check bottom row', function() {
        Board.state = [BLANK, BLANK, X,
                       BLANK, BLANK, X,
                       BLANK, BLANK, X]

        assert.equal(Board.checkForWin(), true);
      });
      it('should correctly identify no win', function() {
        Board.state = [BLANK, BLANK, BLANK,
                       BLANK, O, BLANK,
                       BLANK, O, BLANK]
        assert.equal(Board.checkForWin(), false);
      });
    });

    describe('checkDiagonal', function() {
      it('should correctly check first column', function() {
        Board.state = [O, BLANK, BLANK,
                       BLANK, O, BLANK,
                       BLANK, BLANK, O]

        assert.equal(Board.checkForWin(), true);
      });
      it('should correctly check middle row', function() {
        Board.state = [BLANK, BLANK, O,
                       BLANK, O, BLANK,
                       O, BLANK, BLANK]

        assert.equal(Board.checkForWin(), true);
      });
      it('should correctly check middle row', function() {
        Board.state = [BLANK, BLANK, X,
                       BLANK, X, BLANK,
                       X, BLANK, BLANK]

        assert.equal(Board.checkForWin(), true);
      });
      it('should correctly identify no win', function() {
        Board.state = [BLANK, BLANK, BLANK,
                       BLANK, O, BLANK,
                       BLANK, O, O]
        assert.equal(Board.checkForWin(), false);
      });
    });
  });

  describe('checkForTie', function() {
    it('should correctly identify a tie', function() {
      Board.state = [X, X, O,
                     O, O, X,
                     X, O, O]
      assert.equal(Board.checkForTie(), true);
    });

    it('should correctly identify no tie', function() {
      Board.state = [X, X, BLANK,
                     O, O, X,
                     X, O, O]
      assert.equal(Board.checkForTie(), false);
    });
  });

  describe('update', function() {
    it('can update the state', function() {
      Board.reset();
      Board.update(0, X);
      assert.deepEqual(Board.state, [X, BLANK, BLANK,
                                     BLANK, BLANK, BLANK,
                                     BLANK, BLANK, BLANK]);

      Board.update(8, O);
      assert.deepEqual(Board.state, [X, BLANK, BLANK,
                                     BLANK, BLANK, BLANK,
                                     BLANK, BLANK, O]);
    });
  });

});
