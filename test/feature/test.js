const assert = require('assert');

describe('Welcome page', function(){
  it('should have a title', function(){
    browser.url('/');
    var title = browser.getTitle();
    assert.equal(title, 'Pomodoro');
  });
});

describe('Task input field', function(){
  it('should take text', function(){
    browser.url('/');
    var createTask = browser.element('#create-task');
    createTask.setValue('Do something');
    assert.equal(createTask.getValue(), 'Do something');
  });
});

describe('Task time input field', function(){
  it('should take a number', function(){
    var taskTimeInput = browser.element('#task-time');
    taskTimeInput.setValue(25);
    assert.equal(taskTimeInput.getValue(), 25);
  });
});

  describe('Rest time input field', function(){
    it('should take a number', function(){
      var restTimeInput = browser.element('#rest-time');
      restTimeInput.setValue(25);
      assert.equal(restTimeInput.getValue(), 25);
    });
});

  describe('Start button', function(){
  this.rightNow = Date.now();
  this.dateNow = Date.now;
  Date.now = () => this.rightNow;
    it('should start timer when clicked', function(){
      var startButton = browser.element('#start-button');
      var taskTimeInput = browser.element('#task-time');
      var countDown = browser.element('#countDown');
      taskTimeInput.setValue(25);
      assert.notEqual(countDown, 25);
    });
  });
//Phase 1

//user story 1
// There should be 1 input field for task
// Input field should allow user to add task

// user story 2
// There is an input for task time
// Input field should allow user to adjust task time

// user story 3
// There is an input for break time
// Input field should allow user to adjust break time

// user story 4
// there should be a button that starts the timer
// when button is clicked, pomodoro timer starts

// Phase 2

// user story 5
// "Created task" that user entered is the title

// user story 6
// There is a timer counting down from user's time input
// When the task timer reaches zero sound will play

// user story 7
// There should be a pause button
// when pause button is pressed, the task timer will pause at it's current time

// user story 8
// There should be a stop button
// User should be returned to start screen when button is pressed

// user story 9
// there should be a resume button when pause button is pressed
// resume button should restart the task timer

// Phase 3

// user story 10
// "Created task" that user entered is the title

// user story 11
// There is a timer counting down from user's rest time input
// When the timer reaches zero sound will play

// user story 12
// There should be a pause button
// when pause button is pressed, the rest timer will pause at it's current time

// user story 13
// There should be a stop button
// User should be returned to start screen when button is pressed
