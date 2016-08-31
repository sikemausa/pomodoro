require('../styles/styles');
const render = require('./render');
const $ = require('jquery');
const Timer = require('./timer');
const moment = require('moment');
var taskTime = $('#task-time').val();
var restTime = $('#rest-time').val();
var startButton = $('#start-button');
var stopButton = $('#stop-button');
var taskTimer;
var restTimer;
var time;
var taskStatus = 1;
var audio = new Audio('Beep.mp3');

function playAudio(timer){
  if (timer.remainingTime < 21000 && timer.remainingTime > 20000){audio.play();}
  if (timer.remainingTime < 16000 && timer.remainingTime > 15000){audio.play();}
  if (timer.remainingTime < 11000 && timer.remainingTime > 10000){audio.play();}
  if (timer.remainingTime < 6000 && timer.remainingTime > 5000){audio.play();}
  if (timer.remainingTime < 1000 && timer.remainingTime > 0){audio.play();}
}

function renderCountDown(time) {
  render.$timer.html(`<article id="countDown">${moment(time).format('mm:ss')}</article>`);
}

function stopElementFade(){
  render.$timer.stop(true, true).fadeOut().fadeIn();
}

function fadeElement(currentTimer){
 if (currentTimer.remainingTime < 20000 && currentTimer.remainingTime > 0){
   render.$timer.fadeOut(2000).fadeIn(2000);
 }
}

function breakTimer() {
  render.renderBreakTimeRemaining();
  taskStatus++;
  tick(restTimer);
}

function endTick(){
    stopElementFade();
    window.clearTimeout(time);
}

function setNewTimer(restMultiplier){
  restTimer = new Timer($('#rest-time').val() * restMultiplier);
  breakTimer();
}

function tick(timer) {
  timer.endTime = timer.startTime + timer.period;
  timer.remainingTime = timer.endTime - Date.now();
  renderCountDown(timer.remainingTime);
  playAudio(timer);
  fadeElement(timer);

    if(taskStatus % 7 === 0  && taskStatus % 2 !== 0) {
      time = setTimeout(tick, 0 , timer);
      if(timer.remainingTime <= 0) {
        endTick();
        setNewTimer(2);}
  } else if(taskStatus % 13 === 0 && taskStatus % 2 !== 0) {
      time = setTimeout(tick, 0 , timer);
      if(timer.remainingTime <= 0) {
        endTick();
        setNewTimer(2);}
  } else if(taskStatus % 2 !== 0){
      time = setTimeout(tick, 0, timer);
      if(timer.remainingTime <= 0){
        endTick();
        setNewTimer(1);}
  } else if(taskStatus % 2 === 0){
      time = setTimeout(tick, 0, timer);
      if(timer.remainingTime <= 0){
        endTick();
        taskTimer = new Timer($('#task-time').val());
        render.renderTaskTimeRemaining();
        taskStatus++;
        tick(taskTimer);
    }
  }
}

function instantiateTimer(){
  taskTimer = new Timer($('#task-time').val());
  render.renderTimerScreen();
  render.renderTaskTimeRemaining();
  tick(taskTimer);
}

function stopTimer(){
  taskStatus = 1;
  render.$timer.hide();
  stopElementFade();
  window.clearTimeout(time);
  render.renderHomeScreen();
  $("#create-task").val('');
}

startButton.on('click', function() {
  instantiateTimer();
});

stopButton.on('click', function() {
  stopTimer();
});
