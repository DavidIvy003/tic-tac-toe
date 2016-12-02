const assert = require('assert');

describe('Board', function() {
  const board = require('../public/assets/javascript/board')
  const Board = new board()

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

});
