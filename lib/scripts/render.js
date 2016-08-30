const $ = require('jquery');

module.exports = {
  $title: $('.title'),
  $timer: $('#timer'),
  $startButton: $('#start-button'),
  $countdownButtons: $('.countdown-buttons'),
  $timeInputs: $('.time-inputs'),
  $timeInputsText: $('.time-inputs-text'),
  $timeRemaining: $('#time-remaining'),
  $taskTimeRemaining: $('#task-time-remaining'),
  $breakTimeRemaining: $('#break-time-remaining'),

  renderTimerScreen() {
    this.$title.css('display', 'none');
    this.$timer.css('display', 'block');
    this.$startButton.css('display', 'none');
    this.$countdownButtons.css('display', 'flex');
    this.$timeInputs.css('display', 'none');
    this.$timeInputsText.css('display', 'none');
    this.$timeRemaining.css('display', 'flex');
  },

  renderHomeScreen() {
    this.$title.css('display', 'block');
    this.$timer.css('display', 'none');
    this.$startButton.css('display', 'block');
    this.$countdownButtons.css('display', 'none');
    this.$timeInputs.css('display', 'flex');
    this.$timeInputsText.css('display', 'flex');
    this.$timeRemaining.css('display', 'none');
  },

  renderTaskTimeRemaining() {
    this.$taskTimeRemaining.css('display', 'flex');
    this.$timer.css('color', '#11B997');
    this.$breakTimeRemaining.css('display', 'none');
  },

  renderBreakTimeRemaining() {
    this.$taskTimeRemaining.css('display', 'none');
    this.$timer.css('color', '#EB3B3F');
    this.$breakTimeRemaining.css('display', 'flex');
  },
};
