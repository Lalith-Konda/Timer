import * as Timer from "./timer.js";
import { updateDisplay } from "./ui.js";

document.addEventListener("click", () => {

    if (Timer.running()) {
        Timer.stop();
    } else {
        Timer.start(updateDisplay);
    }

});
