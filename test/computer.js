const assert = require('assert');

const X = 'X'
const O = 'O'
const BLANK = BLANK

describe('Computer', function() {
  const stack = []
  const computer = require('../public/assets/javascript/computer')
  const Computer = new computer({ type: 'computer', symbol: X })

  describe('reward', function() {
    it('should update reward stack', function() {
      const state = [X, O, X,
                     BLANK, O, BLANK,
                     BLANK, BLANK, X]
      Computer.reward(state, 8, 10)
      assert.equal(Computer.getStateReward(state, 8), 10);
    });
  });

});
