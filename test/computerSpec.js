import assert from 'assert'
import { X, O, BLANK } from '../public/assets/javascript/config'
import computer from '../public/assets/javascript/computer'

describe('Computer', () => {
  let Computer
  beforeEach(() => {
    Computer = new computer({ type: 'computer', symbol: X })
    Computer.certainty = Infinity
  })

  describe('reward', () => {
    it('should update reward stack', () => {
      const state = [X, O, X,
                     BLANK, O, BLANK,
                     BLANK, BLANK, X]
      Computer.reward(state, 8, 10)
      assert.equal(Computer.getStateReward(state, 8), 10)
    })

    it('can update existing state', () => {
      const state = [X, O, X,
                     BLANK, O, BLANK,
                     BLANK, O, X]
      Computer.reward(state, 8, 10)
      Computer.reward(state, 8, -20)
      assert.equal(Computer.getStateReward(state, 8), -5)
    })
  })

  describe('move', () => {
    it('can pick the best finishing move', () => {
      const state = [BLANK, O, X,
                     BLANK, BLANK, BLANK,
                     BLANK, O, X]
      Computer.reward(state, 0, -10)
      Computer.reward(state, 3, -10)
      Computer.reward(state, 4, -10)
      Computer.reward(state, 5, 10)
      Computer.reward(state, 6, -10)
      assert.equal(Computer.move(state, [0, 3, 4, 5, 6]), 5)
    })

    it('can pick the best initial move', () => {
      const state = [BLANK, BLANK, BLANK,
                     BLANK, BLANK, BLANK,
                     BLANK, BLANK, BLANK]
      Computer.reward(state, 0, -10)
      Computer.reward(state, 1, -10)
      Computer.reward(state, 2, -10)
      Computer.reward(state, 3, -10)
      Computer.reward(state, 4, 10)
      Computer.reward(state, 5, -10)
      Computer.reward(state, 6, -10)
      Computer.reward(state, 7, -10)
      Computer.reward(state, 8, -10)
      assert.equal(Computer.move(state, [0, 1, 2, 3, 4, 5, 6, 7, 8]), 4)
    })
  })

})
