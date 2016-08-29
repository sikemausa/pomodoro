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
  timer.endTime = timer.startTime + timer.period;
  timer.remainingTime = timer.endTime - Date.now();
  renderCountDown(timer.remainingTime);
  setTimeout(tick, 0, timer);
}

startButton.on('click', function() {
    taskTimer = new Timer();
    if (taskTimer.taskStatus % 2 !== 0){
      debugger;
      renderTimerScreen();
      taskTimer.period = $('#task-time').val() * 60000;
      console.log(taskTimer.taskStatus);
      tick(taskTimer);
      taskTimer.taskStatus ++;
  }
  else if(taskTimer.taskStatus % 2 === 0){
    renderTimerScreen();
    taskTimer.period = $('#rest-time').val() * 60000;
    console.log(taskTimer.taskStatus);
    tick(taskTimer);
    taskTimer.taskStatus++;
  }

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
 renderHomeScreen();
 $("#create-task").val('');
 location.reload();
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

   function pauseTimer() {
      timer.currentState = "paused";
      timer.pauseTime = Date.now();
      timer.remaingingTime = timer.endTime - timer.pauseTime;
  }

 function renderCountDown(time) {
   timerContainer.html(`<article id="countDown">${moment(time).format('mm:ss')}</article>`);}
