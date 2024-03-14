const displayTime = document.querySelector('.display-time');
const startButton = document.querySelector('.start');
const resetButton = document.querySelector('.reset');
const userInputFocusTime = document.querySelector('#focus-time');
const displayUserFocusTime = document.querySelector('.selected-time');
const alaramAudio = new Audio('morning_alarm_2.mp3');

let minutes;
let seconds = 0;
let focus;

// displays the countdown on screen
const appendTime = (minute, seconds) => {
    minute = minute.toString().padStart(2, "0")
    seconds = seconds.toString().padStart(2, "0")
    displayTime.innerHTML = `${minute} : ${seconds}`;
}

const countFocusTime = () => {
    if (minutes === 0 && seconds === 0) {
        appendTime(0, 0)
        alaramAudio.play();
        clearInterval(focus);
        return
    }
    if (seconds == 0) {
        minutes > 0 ? --minutes : 0
        seconds = 59;
    }
    appendTime(minutes, seconds);
    seconds--
}

startButton.addEventListener('click', () => {
    minutes = userInputFocusTime.value
    focus = setInterval(countFocusTime, 1000)
});


const displayUserTime = () => {
    displayUserFocusTime.innerHTML = `Your Focus Time is ${userInputFocusTime.value} minute`;
    minutes = userInputFocusTime.value
    appendTime(minutes, 0)
}

resetButton.addEventListener('click', () => {
    clearInterval(focus);
    seconds = 0
    displayUserTime()
});

userInputFocusTime.addEventListener('change', () => {
    displayUserTime();
});

window.addEventListener('load', () => {
    displayUserTime()
})
