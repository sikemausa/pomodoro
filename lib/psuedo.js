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




// clock.js

function countDown(taskSeconds, taskMinutes, elem) {
  var element = document.getElementById(elem);
  element.innerHTML = `<center>Minutes: <br>${taskMinutes}<br> <br>Seconds:<br>${taskSeconds}<br>`;
  if(taskSeconds < 1 && taskMinutes < 1) {
    return clearTimeout(timer);
  }
  if(taskSeconds < 1 && taskMinutes > 0){
    taskSeconds = 60;
    taskMinutes--;
  }
  taskSeconds--;
  var timer = setTimeout('countDown('+taskSeconds+', '+taskMinutes+',"'+elem+'")',1000);
}

countDown(3, 5, 'countdown');
