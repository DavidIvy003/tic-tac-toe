import assert from 'assert'
import { X, O, BLANK } from '../public/assets/javascript/config'
import computer from '../public/assets/javascript/computer'

describe('Computer', () => {
  let Computer
  beforeEach(() => {
    Computer = new computer({ type: 'computer', symbol: X })
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
      assert.equal(Computer.getStateReward(state, 8), -10)
    })
  })

  describe('move', () => {
    it('can pick the best finishing move', () => {
      const state = [X, O, X,
                     BLANK, O, BLANK,
                     BLANK, O, X]
      Computer.reward(state, 8, 10)
      assert.equal(Computer.move(state, [3, 5, 6, 8]), 8)
    })

    it('can pick the best initial move', () => {
      const state = [BLANK, BLANK, BLANK,
                     BLANK, BLANK, BLANK,
                     BLANK, BLANK, BLANK]
      Computer.reward(state, 4, 10)
      assert.equal(Computer.move(state, [0, 1, 2, 3, 4, 5, 6, 7, 8]), 4)
    })
  })

})
