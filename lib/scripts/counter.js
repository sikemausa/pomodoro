const $ = require('./jquery');
const Equations = require ('./equations');

Equations.convertSecondsToMinutes(reaminigTIme)

//Event listeners

// up arrow event listener:
// incrementTime();
// renderTime();

// down arrow event listener:
// decrementTime();
// renderTime();

// start button event listener: startClock();

// pause button event listener: pauseClock();

// stop button event listener: stopClock();

var timer = {
}

// Pause, stop, etc as methods on timer,
// other functions such as calculate remaining time etc in seperate file
// other for event listeners

function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {
        var counter =  $("#count-down");
        debugger;
        var current_minutes = mins-1
        seconds--;
        counter.html(current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds));
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            if(mins > 1){
                countdown(mins-1);
            }
        }
    }
    tick();
}

$('#start-button').on('click', function() {
  countdown(1);
});

// thing.js

class Thing = {
  this.x = 100;

  Thing.prorptype.addMessageTothinG = {}
}

module.exports = Thing;

//other.js

const Thing = require('./thing.js')
const $ = require('jquery')

Thing.addMessageToThingAray
