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

function countDown(timeSeconds, timeMinutes, element){
  function restCountDown(restSeconds, restMinutes, element){
     countDown(restSeconds, restMinutes, element);
  }
   element = document.getElementById(element);
   debugger;
   element.innerHTML = timeMinutes + " : " + timeSeconds;
   timeSeconds --;
   if (timeSeconds < 1 && timeMinutes > 0){
   timeMinutes --;
   timeSeconds === 60;
   var timer = setTimeout(countDown(timeSeconds, timeMinutes, element), 1000);
   }
   else if (timeSeconds < 1 && timeMinutes < 1){
     restCountDown();
   }
}
