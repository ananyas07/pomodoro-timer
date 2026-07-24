const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let timeLeft = 1500; 
let interval = null;

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

const startTimer = () => {

    if (interval !== null) return;

    interval = setInterval(() => {

        if (timeLeft > 0) {
            timeLeft--;
            updateTimer();
        } else {
            clearInterval(interval);
            interval = null;
            alert("Time's up!");
        }

    }, 1000);
};

const pauseTimer = () => {
    clearInterval(interval);
    interval = null;
};

const resetTimer = () => {
    clearInterval(interval);
    interval = null;
    timeLeft = 1500;
    updateTimer();
};

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);
updateTimer();
