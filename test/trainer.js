import assert from 'assert'
import trainer from '../public/assets/javascript/trainer'
import history from './fixtures/history/win'

describe('Trainer', function() {
  let stack = []
  const Trainer = new trainer()
  const Computer = { reward: (state, choice, points) => {
    stack.push({ state, choice, points })
  }}
  beforeEach(() => {
    stack = []
  })

  describe('win', function() {
    it('should update computer state', function() {
      Trainer.win(Computer, history, 'X')
      assert.equal(stack.length, 4);
    });
  });

  describe('lose', function() {
    it('should update computer state', function() {
      Trainer.lose(Computer, history, 'O')
      assert.equal(stack.length, 3);
    });
  });

});
