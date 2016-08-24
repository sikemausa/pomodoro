var $ = require('./jquery');

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

function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {
        var counter = document.getElementById("count-down");
        var current_minutes = mins-1
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
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
  countdown(20);
});
