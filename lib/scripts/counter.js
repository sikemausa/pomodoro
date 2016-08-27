// const $ = require('./jquery');
// const Equations = require ('./equations');
// var startButton = $('#start-button');
// var taskInput = $('#task-time');
//
function countdown(minutes, seconds) {
    var secs = seconds || 60;
    var mins = minutes;
    function tick() {
        var counter =  $("#count-down");
        var current_minutes = mins-1;
        secs--;
        counter.html(current_minutes.toString() + ":" + (secs < 10 ? "0" : "") + String(secs));
        if( secs > 0 ) {
            setTimeout(tick, 1000);
        } else {
            if(mins > 1){
                countdown(mins-1);
            }
        }
    }
    tick();
// }
//
//   startButton.on('click', function() {
//   let taskTimeInput = taskInput.val();
//   // if (taskTimeInput === ""){
//   //   startButton.attr("disabled", true);
//   // }
//   // else {
//   //   startButton.attr("disabled", false);
//   countdown(taskTimeInput);
// // }
// });
// //   startButton.on('keyup', function(){
// //
// // });
