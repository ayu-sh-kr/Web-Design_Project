

let timer = false;
let time = 0;
function get(){
    const days = document.getElementById('days').innerHTML;
    const hours = document.getElementById('hours').innerHTML;
    const minutes = document.getElementById('minutes').innerHTML;
    const seconds = document.getElementById('seconds').innerHTML;
    time = Number(days) * 24 * 60 * 60 + Number(hours)* 60 * 60 + Number(minutes) * 60 + Number(seconds);
    return time;
}
function start(){
    get();
    if(time === 0){
        alert("set the time first");
    }
    else{
        timer = true;
        countdown();
    }
}

function reset(){
    timer = false;
    document.getElementById('days').innerHTML = "00";
    document.getElementById('hours').innerHTML = "00";
    document.getElementById('minutes').innerHTML = "00";
    document.getElementById('seconds').innerHTML = "00";
}

function stop(){
    timer = false;
}

function countdown(){
    if(timer === true){
                    let days = Math.floor(time / (24 * 60 * 60));
                    // console.log(days);
                    document.getElementById('days').textContent = days.toString();

                    let hours = Math.floor((time - (days * 24 * 60 * 60)) / (60 * 60));
                    // console.log(hours);
                    document.getElementById('hours').textContent = hours.toString();

                    let minutes = Math.floor((time - (days * 24 * 60 * 60) - (hours * 60 * 60)) / 60);
                    // console.log(minutes);
                    document.getElementById('minutes').textContent = minutes.toString();

                    let seconds = Math.floor(time - (days * 24 * 60 * 60) - (hours * 60 * 60) - minutes * 60);
                    // console.log(seconds);
                    document.getElementById('seconds').textContent = seconds.toString();
                    time--;
                    if(time === 0){
                        reset();
                    }
        setTimeout("countdown()", 1000);
    }
}
function set(){
    let setDays = prompt("Set Day");
    if(setDays != null)
        document.getElementById('days').innerHTML = setDays < 10 ? "0" + setDays : setDays
    else{
        document.getElementById('days').innerHTML = "00";
    }

    let setHours = prompt("Set Hours");
    if(setHours != null)
        document.getElementById('hours').textContent = setHours < 10 ? "0" + setHours : setHours;
    else{
        document.getElementById('hours').textContent = "00";
    }

    let setMinutes = prompt("Set Minutes");
    if(setMinutes != null)
        document.getElementById('minutes').textContent = setMinutes < 10 ? "0" + setMinutes : setMinutes;
    else{
        document.getElementById('minutes').textContent = "00";
    }

    let setSeconds = prompt("Set Seconds");
    if(setSeconds != null)
        document.getElementById('seconds').textContent = setSeconds < 10 ? "0" + setSeconds : setSeconds;
    else {
        document.getElementById('seconds').textContent = "00";
    }
}