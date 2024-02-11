let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

const display = document.querySelector('.display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

function start() {
    clearInterval(interval);
    interval = setInterval(function () {
        milliseconds++;
        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }
        display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
    }, 10);
}

function stop() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    display.textContent = '00:00:00:000';
}