const timer = document.getElementById("timer");

export function updateDisplay(milliseconds) {

    const seconds = milliseconds / 1000;

    timer.textContent = seconds.toFixed(2);

}