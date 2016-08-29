const $ = require('jquery');
const Timer = require('./timer');
const moment = require('moment');
let timerContainer = $('#timer');
let startButton = $('#start-button');

startButton.on('click', function() {
  var savedThis = this;
  let taskTime = $('#task-time').val();
  let restTime = $('#rest-time').val();
  let timer = new Timer(taskTime);
  function tick() {
    timer.endTime = timer.startTime + timer.period;
    timer.remainingTime = timer.endTime - Date.now();
    renderCountDown(timer.remainingTime);
    setTimeout(tick, 990);
  }
  if (timer.remainingTime > 0){
    tick();
  }
  else {
    
  }
 });

 function renderCountDown(time) {
   timerContainer.html(`<article id="countDown">${moment(time).format('mm:ss')}</article>`);}
