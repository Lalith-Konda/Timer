import * as Timer from "./timer.js";
import { updateDisplay } from "./ui.js";

function toggleTimer() {
    if (Timer.running()) {
        Timer.stop();
    } else {
        Timer.start(updateDisplay);
    }
}

// For desktops/laptops: spacebar
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        event.preventDefault(); // prevent page scroll
        toggleTimer();
    }
});

// For mobiles: touch
document.addEventListener("touchstart", () => {
    toggleTimer();
});
