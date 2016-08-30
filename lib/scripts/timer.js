const $ = require('jquery');

class Timer {
  constructor(period, endTime, remainingTime, startTime = Date.now()) {
    this.startTime = startTime;
    this.endTime = endTime || 0;
    this.remainingTime = remainingTime;
    this.period = period * 60000 || 1500000;
    this.taskStatus = 1;
  }
}
module.exports = Timer;
