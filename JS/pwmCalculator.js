
const v_In = document.getElementById("pwm-v-in");
const v_Out = document.getElementById("pwm-v-out");

const dutyCycleRes = document.getElementById("duty-cycle-result");
const arduinoValue = document.getElementById("pwm-arduino-value");

const pwmCalc = document.getElementById("pwm-calc");

const resetVect = document.getElementById("pwm-reset");

const ledSlider = document.getElementById("ledSlider");
const ledDiv = document.querySelector(".bright-show");

window.onload = function() {
    pwmCalc.addEventListener("click", function () {
        var dutyCycle = (Number(v_Out.value) / Number(v_In.value)) * 100;
        var arduinoVal = Math.round((dutyCycle / 100) * 255);

        dutyCycleRes.textContent = Math.round(dutyCycle) + "%";
        arduinoValue.textContent = arduinoVal;
    });

    resetVect.addEventListener("click",function() {
        dutyCycleRes.textContent = "Duty Cycle %";
        arduinoValue.textContent = "PWM-Arduino Value (0-255)";
        v_In.value = "";
        v_Out.value = "";
    });

    ledSlider.addEventListener("input",function() {
        ledDiv.style.opacity = Number(ledSlider.value) / 120;
    });
};