require('../styles/styles');
const render = require('./render')
const {
  renderTimeRemaining,
  renderHomeScreen,
  renderTaskTimeRemaining,
  renderBreakTimeRemaining,
} = require('./render');
const $ = require('jquery');
const Timer = require('./timer');
const moment = require('moment');
let timerContainer = $('#timer');
let startButton = $('#start-button');
let pauseButton = $('#pause-button');
let stopButton = $('#stop-button');
let taskTimer;
let restTimer;
let time;
let taskStatus = 1;
var audio = new Audio('Beep.mp3');

function playAudio(timer){
  if (timer.remainingTime < 21000 && timer.remainingTime > 20000){audio.play();}
  if (timer.remainingTime < 16000 && timer.remainingTime > 15000){audio.play();}
  if (timer.remainingTime < 11000 && timer.remainingTime > 10000){audio.play();}
  if (timer.remainingTime < 6000 && timer.remainingTime > 5000){ audio.play();}
  if (timer.remainingTime < 1000 && timer.remainingTime > 0){ audio.play();}
}

function fadeElement(timer){
 if (timer.remainingTime < 20000 && timer.remainingTime > 0){
   $('#timer').fadeOut(2000).fadeIn(2000);
 }
}

function stopElementFade(timer){
 $('#timer').stop(true, true).fadeOut().fadeIn();
}

function breakTimer() {
  renderBreakTimeRemaining();
  taskStatus++;
  tick(restTimer)
};


function tick(timer) {
  timer.endTime = timer.startTime + timer.period;
  timer.remainingTime = timer.endTime - Date.now();
  renderCountDown(timer.remainingTime);
  playAudio(timer);
  // fadeElement(timer);
  if(taskStatus % 7 === 0  && taskStatus % 2 !== 0) {
    time = setTimeout(tick, 0 , timer);
    if(timer.remainingTime <= 0) {
      window.clearTimeout(time);
      timer = new Timer(($('#rest-time').val() * 2));
      breakTimer();
    }
  } else if(taskStatus % 13 === 0 && taskStatus % 2 !== 0) {
    time = setTimeout(tick, 0 , timer);
    if(timer.remainingTime <= 0) {
      window.clearTimeout(time);
      timer = new Timer(($('#rest-time').val() * 2));
      breakTimer();
    }
  } else if(taskStatus % 2 !== 0){
    time = setTimeout(tick, 0, timer);
    if(timer.remainingTime <= 0){
      window.clearTimeout(time);
      restTimer = new Timer($('#rest-time').val());
      breakTimer();
    }
  } else if(taskStatus % 2 === 0){
    time = setTimeout(tick, 0, timer);
    if(timer.remainingTime <= 0){
      window.clearTimeout(time);
      timer = new Timer($('#task-time').val());
      render.renderTaskTimeRemaining();
      taskStatus++;
      tick(timer);
    }
  }
}

startButton.on('click', function() {
  taskTimer = new Timer($('#task-time').val());
  render.renderTimerScreen();
  render.renderTaskTimeRemaining();
  tick(taskTimer);
});

stopButton.on('click', function() {
  let taskStatus = 1;
  window.clearTimeout(time);
  render.renderHomeScreen();
  $("#create-task").val('');
  taskStatus = 1;
});

function renderCountDown(time) {
  timerContainer.html(`<article id="countDown">${moment(time).format('mm:ss')}</article>`);
};
