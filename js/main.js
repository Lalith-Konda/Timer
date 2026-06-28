import * as Timer from "./timer.js";
import { updateDisplay, setState } from "./ui.js";

const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");

const resetButton = document.getElementById("resetButton");
const plus2Button = document.getElementById("plus2Button");
const dnfButton = document.getElementById("dnfButton");

let lastTime = 0;
let hasPlus2 = false;
let isDNF = false;

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

        lastTime = Number(document.getElementById("timer").textContent);

        hasPlus2 = false;
        isDNF = false;

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

resetButton.addEventListener("click", () => {

    if (Timer.running()) return;

    updateDisplay(0);

});

plus2Button.addEventListener("click", () => {

    if (Timer.running()) return;

    if (lastTime === 0) return;

    hasPlus2 = !hasPlus2;

    let display = lastTime;

    if (hasPlus2)
        display += 2;

    document.getElementById("timer").textContent =
        display.toFixed(2);

});

dnfButton.addEventListener("click", () => {

    if (Timer.running()) return;

    if (lastTime === 0) return;

    isDNF = !isDNF;

    if (isDNF){

        document.getElementById("timer").textContent = "DNF";

    }else{

        let display = lastTime;

        if(hasPlus2)
            display += 2;

        document.getElementById("timer").textContent =
            display.toFixed(2);

    }

});

menuButton.addEventListener("click", () => {

    sidebar.classList.toggle("open");

});
