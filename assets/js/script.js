
// Function create Select Options
function creatOptions(){
    for(var i = 0; i <= 60; i++){

        let timeArray = ['hours', 'minutes', 'seconds'];

        for(let j = 0; j<= 2; j++){
            let elm = document.getElementById(timeArray[j]);
            let newOption = document.createElement('option');
            elm.append(newOption);
            newOption.setAttribute('value', i);
            newOption.innerHTML = i;
        }
    
    }

}

creatOptions(); // execution de la function createOptions


    let hoursInput = document.getElementById('hours');
    let minInput = document.getElementById('minutes');
    let secInput = document.getElementById('seconds');
    let intervalId;
    let displayMsg = document.getElementById('alert');
    let svgCircle = document.querySelector('circle').style;
    let startButton = document.getElementById('start');
    let displayTime = document.getElementById('time');



// Start Timer
function startTimer(){
    
    startButton.addEventListener('click', function(){
        let getHours = hoursInput.value;
        let getMinutes = minInput.value;
        let getSeconds = secInput.value;
        this.style.display = 'none';
        
        
        if(getHours+getMinutes+getSeconds == 0){
            // displayTime.style.fontSize = '14px';
            displayTime.innerHTML = 'Time is unset';
            startButton.style.display = 'block';
            return;
        }

        
        let now = Date.now();
        let setTime = now+getSeconds*1000+getMinutes*60*1000+getHours*3600*1000;

        intervalId = setInterval(function(){ 
            let chrono = Math.round((setTime - Date.now()) / 1000) + 1; 
            let chrono2 = chrono;
            let timeSet = (setTime - now)/1000;

            // console.log(chrono, timeSet);
        
            // chrono donne les bonnes valeurs aux variables correspondantes
            let hours = Math.floor(chrono / 3600);
            chrono %= 3600;
            let minutes = Math.floor(chrono / 60);
            let seconds = chrono % 60;
            
            

            if(chrono < 0){
                svgCircle.transitionDuration = '2s';
                svgCircle.stroke = '#191970';
                svgCircle.fill = '#ffffe0';
                displayMsg.innerHTML = 'Finish!';
                // startButton.style.display = 'block';
                return;
            }else{

                // If you want strings with leading zeroes:
                minutes = String(minutes).padStart(2, "0");
                hours = String(hours).padStart(2, "0");
                seconds = String(seconds).padStart(2, "0");
                // console.log(hours + ":" + minutes + ":" + seconds);
                displayTime.innerHTML = hours + "h " + minutes + "m " + seconds + "s";
                displayMsg.innerHTML = "Gooo!";

            }
            if(chrono2 <= timeSet/4){
                svgCircle.transitionDuration = '2s';
                svgCircle.stroke = '#FF3B14'; // c bd
                svgCircle.fill = '#FFFFE0'; // c bg
                displayMsg.innerHTML = 'Hurry up!';
                displayMsg.style.fill = '#FF3B14';
                displayTime.style.fill = '#FF3B14';
            }

   
        }, 1000);

// console.log(intervalId);

    });

};
// Fin Timer

// startTimer();

startTimer();




// Reset Timer

function addResetEvent(){

    let resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', function(){
        clearInterval(intervalId);

        displayTime.innerHTML = '00h 00m 00s';
        hoursInput.value = null;
        minInput.value = null;
        secInput.value = null;
        displayMsg.innerHTML = null;
        startButton.style.display = 'block';

    })

};

addResetEvent();



