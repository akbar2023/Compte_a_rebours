
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






document.getElementById('start').addEventListener('click', function(){

    let selectHours = document.getElementById('hours');
    var getHours = selectHours.options[selectHours.selectedIndex].value;


    let getMinutes = document.getElementById('minutes').value;
    let getSeconds = document.getElementById('seconds').value;

    let now = Date.now();
    let setTime = now+getSeconds*1000+getMinutes*60*1000+getHours*60*60*1000;

    setInterval(function(){ 
        let chrono = Math.round((setTime - Date.now()) / 1000) + 1; 
    
        // chrono donne les bonnes valeurs aux variables correspondants
        let hours = Math.floor(chrono / 3600);
        chrono %= 3600;
        let minutes = Math.floor(chrono / 60);
        let seconds = chrono % 60;
        
        if(chrono < 0){
            return;
        }else{
            // console.log(chrono);
            // If you want strings with leading zeroes:
            minutes = String(minutes).padStart(2, "0");
            hours = String(hours).padStart(2, "0");
            seconds = String(seconds).padStart(2, "0");
            // console.log(hours + ":" + minutes + ":" + seconds);
            document.getElementById('time').innerHTML = hours + "h " + minutes + "m " + seconds + "s";
        }    
    }, 1000);

});



