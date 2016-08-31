const index = require('../../lib/scripts/index');
const Timer = require('../../lib/scripts/timer');
const render = require('../../lib/scripts/render');
const assert = require('chai').assert;
const expect = require('chai').expect;
const tick = require('');
const $ = require('jquery');

describe('start', function(){
 context('start button', function(){
   beforeEach( function(){
     this.rightNow = Date.now();
     this.dateNow = Date.now;
     Date.now = () => this.rightNow;
   });

   afterEach( function() {
     Date.now = this.dateNow;
     let timer;
   });
   it('should run a timer when clicked', function() {
    let timer = new Timer(15);
     tick(timer);
     assert.equal(timer.period, 15 * 60000);
   });
   it('should decrease the time after clicked', function() {
     let timer = new Timer(15);
     tick(timer);
     asser.isBelow(timer.remainingTime, timer.period);
   });
   it('should change status when time is completed', function() {
     let timer = new Timer(0);
     let taskStatus = 1;
     tick(timer);
     assert.equal(taskStatus, 2);
   });
 });
});
