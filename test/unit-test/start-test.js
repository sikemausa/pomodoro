const Timer = require('../../lib/scripts/timer');
const render = require('../../lib/scripts/render');
const assert = require('chai').assert;
const expect = require('chai').expect;
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
   it('should have a default period', function() {
    let timer = new Timer(15);
     assert.equal(timer.period, 15 * 60000);
   });
   it('should change status when time is completed', function() {
     let taskStatus = 1;
     let timer = new Timer(0);
     taskStatus++;
     assert.equal(taskStatus, 2);
   });
 });
});
