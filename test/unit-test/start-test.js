require('../../lib/scripts/index');
const assert = require('chai').assert;
const $ = require('jquery');

describe('start', function(){
  const timer = new Timer(25, 0, 25);

  it('should decrement the time', function(){
    tick();
    assert.lessThan(timer.remainingTime, 25);
  });
});
