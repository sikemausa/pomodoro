const $ = require('jquery');

class Timer {
  constructor(period, startTime = Date.now()) {
    this.startTime = startTime;
    this.endTime = 0;
    this.remainingTime = 25;
    this.period = period * 60000 || 1500000;
    this.pauseTime = 0;
    this.taskStatus = 1;
    this.currentState = "unstarted";
  }

}

module.exports = Timer;
