import assert from 'assert'
import trainer from '../public/assets/javascript/trainer'
import history from './fixtures/history/win'
import { X, O, BLANK } from '../public/assets/javascript/config'

describe('Trainer', () => {
  let stack = []
  const Trainer = new trainer()
  const Computer = { reward: (state, choice, points) => {
    stack.push({ state, choice, points })
  }}
  beforeEach(() => {
    stack = []
  })

  describe('win', () => {
    beforeEach(() => {
      Trainer.win(Computer, history, X)
    })

    it('should update computer state', () => {
      assert.equal(stack.length, 16)
    })

    it('should rotate the board to speed up learning', () => {
      assert.deepEqual(stack[13].state, [ O, BLANK, X,
                                          BLANK, O, O,
                                          X, BLANK, X ])
      assert.equal(stack[13].choice, 7  )
      assert.deepEqual(stack[14].state, [ X, BLANK, O,
                                          BLANK, O, BLANK,
                                          X, O, X ])
      assert.equal(stack[14].choice, 3)
      assert.deepEqual(stack[15].state, [ X, BLANK, X,
                                          O, O, BLANK,
                                          X, BLANK, O ])
      assert.equal(stack[15].choice, 1)
    })
  })

  describe('lose', () => {
    it('should update computer state', () => {
      Trainer.lose(Computer, history, O)
      assert.equal(stack.length, 12)
    })
  })

})
