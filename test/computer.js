import assert from 'assert'
import { X, O, BLANK } from '../public/assets/javascript/config'
import computer from '../public/assets/javascript/computer'

describe('Computer', function() {
  let Computer
  beforeEach(() => {
    Computer = new computer({ type: 'computer', symbol: X })
  })

  describe('reward', function() {
    it('should update reward stack', function() {
      const state = [X, O, X,
                     BLANK, O, BLANK,
                     BLANK, BLANK, X]
      Computer.reward(state, 8, 10)
      assert.equal(Computer.getStateReward(state, 8), 10);
    });

    it('can update existing state', function() {
      const state = [X, O, X,
                     BLANK, O, BLANK,
                     BLANK, O, X]
      Computer.reward(state, 8, 10)
      Computer.reward(state, 8, -20)
      assert.equal(Computer.getStateReward(state, 8), -10);
    });
  });

});
