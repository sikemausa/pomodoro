require('../styles/styles');
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

// startButton.on('click', function() {
//   timer.period = $('#task-time').val() * 60000;
//   tick();
//   function tick() {
//     timer.endTime = timer.startTime + timer.period;
//     timer.remainingTime = timer.endTime - Date.now();
//     renderCountDown(timer.remainingTime);
//     setTimeout(tick, 990);
//   }
//  });

//     if (taskTimer.taskStatus % 2 === 0){
  //   renderTimerScreen();
  //   taskTimer.period = restTime * 60000;
  //   tick(restTimer);
  // }
  // else{
  //   renderTimerScreen();
  //   taskTimer.period = taskTime * 60000;
  //   tick(taskTimer);
  // }

function tick(timer) {
  renderTimerScreen();
  timer.endTime = timer.startTime + timer.period;
  timer.remainingTime = timer.endTime - Date.now();
  renderCountDown(timer.remainingTime);
  if(timer.remainingTime < 5){
    audio.play();}
  if(taskStatus % 2 !== 0){
    time = setTimeout(tick, 0, timer);
    if(timer.remainingTime <= 0){
      window.clearTimeout(time);
      restTimer = new Timer($('#rest-time').val());
      taskStatus++;
      tick(restTimer);
  }
  }
  else if(taskStatus % 2 === 0){
    time = setTimeout(tick, 0, timer);
    if(timer.remainingTime <= 0){
      window.clearTimeout(time);
      timer = new Timer($('#task-time').val());
      taskStatus++;
      tick(timer);
  }
  // else if(timer.taskStatus % 2 !== 0){
  //   setTimeout(tick, 0, timer);
  //   if(timer.remainingTime <= 0){
  //     timer = new Timer($('#rest-time').val());
  //     timer.taskStatus++;
  //   }
  // }
}
}

startButton.on('click', function() {
    taskTimer = new Timer($('#task-time').val());
    // if (taskTimer.taskStatus % 2 !== 0){
    //   renderTimerScreen();
    //   taskTimer.period = $('#task-time').val() * 60000;
      console.log(taskTimer.taskStatus);
      tick(taskTimer);
      // taskTimer.taskStatus ++;
  // }
  // else if(taskTimer.taskStatus % 2 === 0){
  //   renderTimerScreen();
  //   taskTimer.period = $('#rest-time').val() * 60000;
  //   console.log(taskTimer.taskStatus);
  //   tick(taskTimer);
  //   taskTimer.taskStatus++;
  // }

});

function renderTimerScreen() {
 $('.title').css('display', 'none');
 $('#timer').css('display', 'block');
 $('#start-button').css('display', 'none');
 $('.countdown-buttons').css('display', 'flex');
 $('.time-inputs').css('display', 'none');
 $('.time-inputs-text').css('display', 'none');
}

function renderHomeScreen() {
 $('.title').css('display', 'block');
 $('#timer').css('display', 'none');
 $('#start-button').css('display', 'block');
 $('.countdown-buttons').css('display', 'none');
 $('.time-inputs').css('display', 'flex');
 $('.time-inputs-text').css('display', 'flex');
}

stopButton.on('click', function() {
  let taskStatus = 1;
  window.clearTimeout(time);
  renderHomeScreen();
  $("#create-task").val('');
});

 // pauseButton.on('click', function() {
 //   timer.timeLeftAtPause = timer.endTime - Date.now();
 //   var seconds = timer.timeLeftAtPause / 1000;
 //   pauseTimer();
 //  });
  //
  // function displayPause(seconds) {
  //   var timeDisplay = timer.remainingTime * 60000;
  //   $(timer).html(timeDisplay);
  // }

  //  function pauseTimer() {
  //     timer.currentState = "paused";
  //     timer.pauseTime = Date.now();
  //     timer.remaingingTime = timer.endTime - timer.pauseTime;
  // }

 function renderCountDown(time) {
   timerContainer.html(`<article id="countDown">${moment(time).format('mm:ss')}</article>`);}
