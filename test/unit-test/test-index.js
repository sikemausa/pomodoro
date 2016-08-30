const assert = require('chai').assert;
const $ = require('jquery');
const Timer = require('../../lib/scripts/timer');
require('./start-test');

describe('Our test bundle', function(){
  it('should work', function(){
    assert(true);
  });
});

describe('timer', function(){
  const timer = new Timer(25, 0, 25);
  it('has a preset period', function(){
    assert.equal(timer.period, 25*60000);
  });
  it('has a preset end time', function(){
    assert.equal(timer.endTime, 0);
  });
  it('has a preset remaining time', function(){
    assert.equal(timer.remainingTime, 25);
  });
  it('has a preset task status', function(){
    assert.equal(timer.taskStatus, 1);
  });
  it('has a preset current state', function(){
    assert.equal(timer.currentState, "unstarted");
  });
});
