let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById('displayTime');
let timer = null;

function stopwatch() {
    seconds++;
    if(seconds == 60) {
        seconds = 0;
        minutes++;
        if(minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours<10 ? `0${hours}` : hours;
    let m = minutes<10 ? `0${minutes}` : minutes;
    let s = seconds<10 ? `0${seconds}` : seconds;

    displayTime.textContent = `${h} : ${m} : ${s}`;
}

function watchStart() {
    if(timer == null) {
        timer = setInterval(stopwatch, 1000);
    }
    else{
        clearInterval(timer);
        timer = null;
    }
}

function watchStop() {
    clearInterval(timer);
    timer = null;
}

function watchReset() {
    clearInterval(timer);
    timer = null;
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.textContent = "00:00:00"
}