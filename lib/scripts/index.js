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
let colorBackground = 1;
let colorChange;

function tick(timer) {
  timer.endTime = timer.startTime + timer.period;
  timer.remainingTime = timer.endTime - Date.now();
  renderCountDown(timer.remainingTime);
  if(taskStatus % 7 === 0  && taskStatus % 2 !== 0) {
    time = setTimeout(tick, 0 , timer);
    if(timer.remainingTime <= 0) {
      window.clearTimeout(time);
      timer = new Timer(($('#rest-time').val() * 2));
      renderBreakTimeRemaining();
      taskStatus++;
      tick(timer);
    }
  } else if(taskStatus % 13 === 0 && taskStatus % 2 !== 0) {
    time = setTimeout(tick, 0 , timer);
    if(timer.remainingTime <= 0) {
      window.clearTimeout(time);
      timer = new Timer(($('#rest-time').val() * 2));
      renderBreakTimeRemaining();
      taskStatus++;
      tick(timer);
    }
  } else if(taskStatus % 2 !== 0){
    time = setTimeout(tick, 0, timer);
    if(timer.remainingTime <= 0){
      window.clearTimeout(time);
      restTimer = new Timer($('#rest-time').val());
      renderBreakTimeRemaining();
      taskStatus++;
      tick(restTimer);
    };
  } else if(taskStatus % 2 === 0){
    time = setTimeout(tick, 0, timer);
    if(timer.remainingTime <= 0){
      window.clearTimeout(time);
      timer = new Timer($('#task-time').val());
      renderTaskTimeRemaining();
      taskStatus++;
      tick(timer);
    };
  };
  // if(timer.remainingTime <= 20 && timer.remainingTime >= 1) {
  //   colorChange = setInterval(changeBackground, 1000);
  // } else if(timer.remainingTime <= 0) {
  //   window.clearInterval(colorChange);
  // }
};

// function changeBackground() {
//   if(colorBackground === 1) {
//     timerContainer.css('color', '#EB3B3F');
//     colorBackground = 2;
//   } else {
//     timeContainer.css('color', '#11B997');
//   };
// };

startButton.on('click', function() {
  taskTimer = new Timer($('#task-time').val());
  renderTimerScreen();
  renderTaskTimeRemaining();
  tick(taskTimer);
});

stopButton.on('click', function() {
  window.clearTimeout(time);
  renderHomeScreen();
  $("#create-task").val('');
  taskStatus = 1;
});

function renderTimerScreen() {
  $('.title').css('display', 'none');
  $('#timer').css('display', 'block');
  $('#start-button').css('display', 'none');
  $('.countdown-buttons').css('display', 'flex');
  $('.time-inputs').css('display', 'none');
  $('.time-inputs-text').css('display', 'none');
  $('#time-remaining').css('display', 'flex');
};

function renderHomeScreen() {
  $('.title').css('display', 'block');
  $('#timer').css('display', 'none');
  $('#start-button').css('display', 'block');
  $('.countdown-buttons').css('display', 'none');
  $('.time-inputs').css('display', 'flex');
  $('.time-inputs-text').css('display', 'flex');
  $('#time-remaining').css('display', 'none');
};

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
};
