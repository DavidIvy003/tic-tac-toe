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
      assert.deepEqual(stack[25].state, '201022101')
      assert.equal(stack[25].choice, 7  )
      assert.deepEqual(stack[26].state, '102020121')
      assert.equal(stack[26].choice, 3)
      assert.deepEqual(stack[27].state, '101220102')
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
      assert.deepEqual(stack[25].state, '201022101')
      assert.equal(stack[25].choice, 7)
      assert.deepEqual(stack[26].state, '102020121')
      assert.equal(stack[26].choice, 3)
      assert.deepEqual(stack[27].state, '101220102')
      assert.equal(stack[27].choice, 1)
    })
  })

})
