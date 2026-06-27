import * as Timer from "./timer.js";
import { updateDisplay, setState } from "./ui.js";

const HOLD_TIME = 300;

let state = "IDLE";
let holdTimeout = null;

setState("IDLE");

// ---------- DESKTOP ----------

document.addEventListener("keydown", (event) => {

    if (event.code !== "Space") return;
    event.preventDefault();

    if (event.repeat) return;

    if (state === "IDLE") {

        state = "HOLDING";
        setState("HOLDING");

        holdTimeout = setTimeout(() => {

            state = "READY";
            setState("READY");

        }, HOLD_TIME);

    }

    else if (state === "RUNNING") {

        Timer.stop();

        state = "IDLE";
        setState("IDLE");

    }

});

document.addEventListener("keyup", (event) => {

    if (event.code !== "Space") return;

    if (state === "HOLDING") {

        clearTimeout(holdTimeout);

        state = "IDLE";
        setState("IDLE");

    }

    else if (state === "READY") {

        Timer.start(updateDisplay);

        state = "RUNNING";
        setState("RUNNING");

    }

});

// ---------- MOBILE ----------

document.addEventListener("touchstart", (event) => {

    if (event.touches.length !== 1) return;

    if (state === "IDLE") {

        state = "HOLDING";
        setState("HOLDING");

        holdTimeout = setTimeout(() => {

            state = "READY";
            setState("READY");

        }, HOLD_TIME);

    }

    else if (state === "RUNNING") {

        Timer.stop();

        state = "IDLE";
        setState("IDLE");

    }

});

document.addEventListener("touchend", () => {

    if (state === "HOLDING") {

        clearTimeout(holdTimeout);

        state = "IDLE";
        setState("IDLE");

    }

    else if (state === "READY") {

        Timer.start(updateDisplay);

        state = "RUNNING";
        setState("RUNNING");

    }

});
