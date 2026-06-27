const timer = document.getElementById("timer");

export function updateDisplay(milliseconds) {
    timer.textContent = (milliseconds / 1000).toFixed(2);
}

export function setState(state) {
    switch (state) {
        case "IDLE":
        case "RUNNING":
            timer.style.color = "white";
            break;

        case "HOLDING":
            timer.style.color = "#ff5555";
            break;

        case "READY":
            timer.style.color = "#00ff66";
            break;
    }
}
