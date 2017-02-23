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
      assert.equal(stack.length, 28)
    })

    it('should rotate the board to speed up learning', () => {
      assert.deepEqual(stack[25].state, [ O, BLANK, X,
                                          BLANK, O, O,
                                          X, BLANK, X ])
      assert.equal(stack[25].choice, 7  )
      assert.deepEqual(stack[26].state, [ X, BLANK, O,
                                          BLANK, O, BLANK,
                                          X, O, X ])
      assert.equal(stack[26].choice, 3)
      assert.deepEqual(stack[27].state, [ X, BLANK, X,
                                          O, O, BLANK,
                                          X, BLANK, O ])
      assert.equal(stack[27].choice, 1)
    })
  })

  describe('lose', () => {
    beforeEach(() => {
      Trainer.lose(Computer, history, O)
    })

    it('should update computer state', () => {
      assert.equal(stack.length, 28)
    })

    it('should flip the board to speed up learning', () => {
      assert.deepEqual(stack[25].state, [ X, BLANK, O,
                                          BLANK, X, X,
                                          O, BLANK, O ])
      assert.equal(stack[25].choice, 7)
      assert.deepEqual(stack[26].state, [ O, BLANK, X,
                                          BLANK, X, BLANK,
                                          O, X, O ])
      assert.equal(stack[26].choice, 3)
      assert.deepEqual(stack[27].state, [ O, BLANK, O,
                                          X, X, BLANK,
                                          O, BLANK, X ])
      assert.equal(stack[27].choice, 1)
    })
  })

})
