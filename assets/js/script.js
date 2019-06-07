/* *** SetTimeOut *** */

// let getHour = document.getElementById('hours').value;
// let getMin = document.getElementById('minutes').value;
// let getSec = document.getElementById('seconds').value;
// let timeOut = getHour + ':' + getMin + ':' + getSec; 

let countdown;

function timer(seconds = 14){
    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(function(){
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        // stop it
        if(secondsLeft <= 0){
            clearInterval(countdown);
            return;
        }

        // display it
        displayTimeLeft(secondsLeft);
    }, 1000)
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    console.log({minutes, remainderSeconds});
}

timer();

displayTime()