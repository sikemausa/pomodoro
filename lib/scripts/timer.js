class Timer {
  constructor(start, pauseTime, end, remaining) {
    this.startTime = start;
    this.endTime = end;
    this.pauseTime = pauseTime || 0;
    this.timeLeft = this.remaining || 25;
  }

  initiateTimer() {
    this.start = Date.now();
    this.stop = this.start + this.remaining;
  }

  pauseTimer(){
    this.pauseTime = Date.now();
    this.remaining = this.pauseTime + this.remaining;
  }

  countDown(){
    
  }
}
