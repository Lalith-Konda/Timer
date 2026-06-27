let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;

export function start(updateDisplay) {

    if (isRunning) return;

    startTime = Date.now();

    timerInterval = setInterval(() => {

        elapsedTime = Date.now() - startTime;

        updateDisplay(elapsedTime);

    }, 10);

    isRunning = true;

}

export function stop() {

    if (!isRunning) return;

    clearInterval(timerInterval);

    isRunning = false;

}

export function running() {

    return isRunning;

}