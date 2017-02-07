const assert = require('assert');

describe('Trainer', function() {
  const stack = []
  const trainer = require('../public/assets/javascript/trainer')
  const Trainer = new trainer()
  const Computer = { reward: (state, choice, points) => {
    stack.push({ state, choice, points })
  }}

  describe('win', function() {
    it('should update computer state', function() {
      const history = require('./fixtures/history/win').default
      Trainer.win(Computer, history, 'X')
      assert.equal(stack.length, 4);
    });
  });

});
