require('../styles/styles');
// require('./render');
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
  if (timer.remainingTime < 6000 && timer.remainingTime > 5000){audio.play();}
  if (timer.remainingTime < 1000 && timer.remainingTime > 0){audio.play();}
}

function fadeElement(timer){
  if (timer.remainingTime < 20000 && timer.remainingTime > 1000){
    $('#timer').fadeOut(2000).fadeIn(2000);
  }
}

function stopElementFade(){
  $('#timer').stop(true, true).fadeOut().fadeIn();
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
      stopElementFade();
      window.clearTimeout(time);
      timer = new Timer(($('#rest-time').val() * 2));
      renderBreakTimeRemaining();
      taskStatus++;
      tick(timer);
    }
  } else if(taskStatus % 13 === 0 && taskStatus % 2 !== 0) {
    time = setTimeout(tick, 0 , timer);
    if(timer.remainingTime <= 0) {
      stopElementFade();
      window.clearTimeout(time);
      timer = new Timer(($('#rest-time').val() * 2));
      renderBreakTimeRemaining();
      taskStatus++;
      tick(timer);
    }
  } else if(taskStatus % 2 !== 0){
    time = setTimeout(tick, 0, timer);
    if(timer.remainingTime <= 0){
      stopElementFade();
      window.clearTimeout(time);
      restTimer = new Timer($('#rest-time').val());
      renderBreakTimeRemaining();
      taskStatus++;
      tick(restTimer);
    }
  } else if(taskStatus % 2 === 0){
    time = setTimeout(tick, 0, timer);
    if(timer.remainingTime <= 0){
      stopElementFade();
      window.clearTimeout(time);
      timer = new Timer($('#task-time').val());
      renderTaskTimeRemaining();
      taskStatus++;
      tick(timer);
    }
  }
}

startButton.on('click', function() {
  taskTimer = new Timer($('#task-time').val());
  renderTimerScreen();
  renderTaskTimeRemaining();
  tick(taskTimer);
});

stopButton.on('click', function() {
  taskStatus = 1;
  timerContainer.hide();
  stopElementFade();
  window.clearTimeout(time);
  renderHomeScreen();
  $("#create-task").val('');
});

function renderTimerScreen() {
  $('.title').css('display', 'none');
  $('#timer').css('display', 'block');
  $('#start-button').css('display', 'none');
  $('.countdown-buttons').css('display', 'flex');
  $('.time-inputs').css('display', 'none');
  $('.time-inputs-text').css('display', 'none');
  $('#time-remaining').css('display', 'flex');
}

function renderHomeScreen() {
  $('.title').css('display', 'block');
  $('#timer').css('display', 'none');
  $('#start-button').css('display', 'block');
  $('.countdown-buttons').css('display', 'none');
  $('.time-inputs').css('display', 'flex');
  $('.time-inputs-text').css('display', 'flex');
  $('#time-remaining').css('display', 'none');
}

function renderTaskTimeRemaining() {
  $('#task-time-remaining').css('display', 'flex');
  $('#timer').css('color', '#11B997');
  $('#break-time-remaining').css('display', 'none');
}

function renderBreakTimeRemaining() {
  $('#task-time-remaining').css('display', 'none');
  $('#timer').css('color', '#EB3B3F');
  $('#break-time-remaining').css('display', 'flex');
}

function renderCountDown(time) {
  timerContainer.html(`<article id="countDown">${moment(time).format('mm:ss')}</article>`);
}
