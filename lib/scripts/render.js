module.exports = {
// let title = $('.title');
// let timer = $('#timer');
// let startButton = $('#startButton');
// let countdownButtons = $('.countdown-buttons');
// let timeInputs = $('.time-inputs');
// let TimeInputsText = $('.time-inputs-text');
// let timeRemaining = $('#time-remaining');

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
};
