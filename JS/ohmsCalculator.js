
const voltageIn = document.getElementById("voltage");
const currentIn = document.getElementById("current");
const resistanceIn = document.getElementById("resistance");

const resetVector = document.getElementById("resetVector");

const calcBtn = document.getElementById("ohms-calc-btn");

const resultLabel = document.getElementById("ohms-result");

calcBtn.addEventListener("click", function () {
    calc = [];
    var result = 0;
    type = "";

    if (voltageIn.value !== "") { calc.push("voltage"); }
    if (currentIn.value !== "") { calc.push("current"); }
    if (resistanceIn.value !== "") { calc.push("resistance"); }

    if (calc.length !== 2) { return; }

    if (calc.includes("voltage") && calc.includes("current"))
    { result = Number(voltageIn.value) / Number(currentIn.value); type = "Ω"; }

    if (calc.includes("voltage") && calc.includes("resistance"))
    { result = Number(voltageIn.value) / Number(resistanceIn.value); type = "A"; }

    if (calc.includes("current") && calc.includes("resistance"))
    { result = Number(currentIn.value) * Number(resistanceIn.value); type = "V"; }

    resultLabel.textContent = Math.abs(result).toFixed(1) + type;
});

resetVector.addEventListener("click",function() {
    voltageIn.value = "";
    currentIn.value = "";
    resistanceIn.value = "";
    resultLabel.textContent = "Result";
});