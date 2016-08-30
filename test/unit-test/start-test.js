require('../../lib/scripts/index');
const assert = require('chai').assert;
const $ = require('jquery');

describe('start', function(){
  beforeEach(function(){
    const timer = new Timer(25, 0, 25);

  });
  afterEach(function() {

  });

  it('should change css atributes', function() {
    
  })
  it('should decrement the time', function(){
    tick();
    assert.lessThan(timer.remainingTime, 25);
  });
});
