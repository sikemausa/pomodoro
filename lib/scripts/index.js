const $ = require('jquery');
const Timer = require('./timer');
const moment = require('moment');
let timer = $('#timer');
let startButton = $('#start-button');

startButton.on('click', function() {
  var timer = new Timer();

  function tick() {
    timer.endTime = timer.startTime + timer.period;
    timer.remainingTime = timer.endTime - Date.now();
    renderCountDown(timer.remainingTime);
    setTimeout(tick, 1000);
  }
  tick();
 });

 function renderCountDown(time) {
   timer.html(`<article id="countDown">${moment(time).format('mm:ss')}</article>`);}
