const $ = require('jquery');
const Timer = require('./timer');
const moment = require('moment');
let timerContainer = $('#timer');
let startButton = $('#start-button');
let timer = new Timer();

startButton.on('click', function() {
  timer.period = $('#task-time').val() * 60000;
  function tick() {
    timer.endTime = timer.startTime + timer.period;
    timer.remainingTime = timer.endTime - Date.now();
    renderCountDown(timer.remainingTime);
    setTimeout(tick, 990);
  }
  tick();
 });

   function pauseTimer() {
      timer.currentState = "paused";
      timer.pauseTime = Date.now();
      timer.remaingingTime = timer.endTime - timer.pauseTime;
  }

 function renderCountDown(time) {
   timerContainer.html(`<article id="countDown">${moment(time).format('mm:ss')}</article>`);}
