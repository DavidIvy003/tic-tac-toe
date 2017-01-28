const assert = require('assert');

describe('Board', function() {
  const board = require('../public/assets/javascript/board')
  const Board = new board()

  describe('checkForWin', function() {
    it('should correctly check top row', function() {
      Board.reset();

      assert.deepEqual(Board.state, [undefined, undefined, undefined,
                                     undefined, undefined, undefined,
                                     undefined, undefined, undefined]);
    });
  });

  describe('checkForWin', function() {
    describe('checkRows', function() {
      it('should correctly check top row', function() {
        Board.state = [0, 0, 0,
                       undefined, undefined, undefined,
                       undefined, undefined, undefined]

        assert.equal(Board.checkForWin(), true);
      });
      it('should correctly check middle row', function() {
        Board.state = [undefined, undefined, undefined,
                       0, 0, 0,
                       undefined, undefined, undefined]

        assert.equal(Board.checkForWin(), true);
      });
      it('should correctly check bottom row', function() {
        Board.state = [undefined, undefined, undefined,
                       undefined, undefined, undefined,
                       1, 1, 1]

        assert.equal(Board.checkForWin(), true);
      });
      it('should correctly identify no win', function() {
        Board.state = [undefined, undefined, undefined,
                       undefined, undefined, undefined,
                       undefined, 0, 0]
        assert.equal(Board.checkForWin(), false);
      });
    });

    describe('checkColumns', function() {
      it('should correctly check first column', function() {
        Board.state = [0, undefined, undefined,
                       0, undefined, undefined,
                       0, undefined, undefined]

        assert.equal(Board.checkForWin(), true);
      });
      it('should correctly check middle row', function() {
        Board.state = [undefined, 0, undefined,
                       undefined, 0, undefined,
                       undefined, 0, undefined]

        assert.equal(Board.checkForWin(), true);
      });
      it('should correctly check bottom row', function() {
        Board.state = [undefined, undefined, 1,
                       undefined, undefined, 1,
                       undefined, undefined, 1]

        assert.equal(Board.checkForWin(), true);
      });
      it('should correctly identify no win', function() {
        Board.state = [undefined, undefined, undefined,
                       undefined, 0, undefined,
                       undefined, 0, undefined]
        assert.equal(Board.checkForWin(), false);
      });
    });

    describe('checkDiagonal', function() {
      it('should correctly check first column', function() {
        Board.state = [0, undefined, undefined,
                       undefined, 0, undefined,
                       undefined, undefined, 0]

        assert.equal(Board.checkForWin(), true);
      });
      it('should correctly check middle row', function() {
        Board.state = [undefined, undefined, 0,
                       undefined, 0, undefined,
                       0, undefined, undefined]

        assert.equal(Board.checkForWin(), true);
      });
      it('should correctly check middle row', function() {
        Board.state = [undefined, undefined, 1,
                       undefined, 1, undefined,
                       1, undefined, undefined]

        assert.equal(Board.checkForWin(), true);
      });
      it('should correctly identify no win', function() {
        Board.state = [undefined, undefined, undefined,
                       undefined, 0, undefined,
                       undefined, 0, 0]
        assert.equal(Board.checkForWin(), false);
      });
    });
  });

  describe('checkForTie', function() {
    it('should correctly identify a tie', function() {
      Board.state = [1, 1, 0,
                     0, 0, 1,
                     1, 0, 0]
      assert.equal(Board.checkForTie(), true);
    });

    it('should correctly identify no tie', function() {
      Board.state = [1, 1, undefined,
                     0, 0, 1,
                     1, 0, 0]
      assert.equal(Board.checkForTie(), false);
    });
  });

  describe('update', function() {
    it('can update the state', function() {
      Board.reset();
      Board.update(0, 1);
      assert.deepEqual(Board.state, [1, undefined, undefined,
                                     undefined, undefined, undefined,
                                     undefined, undefined, undefined]);

      Board.update(8, 0);
      assert.deepEqual(Board.state, [1, undefined, undefined,
                                     undefined, undefined, undefined,
                                     undefined, undefined, 0]);
    });
  });

});
