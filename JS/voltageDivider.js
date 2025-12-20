
const vIn = document.getElementById("vd-in");
const vOut = document.getElementById("vd-out");
const res1 = document.getElementById("vd-resistance");

const reset = document.getElementById("voltageReset");

const res2 = document.getElementById("resistorLabel");
const vdBtn = document.getElementById("vd-calc");

vdBtn.addEventListener("click",function() {
    var result = (vOut.value * res1.value) / (Number(vIn.value) - Number(vOut.value));
    res2.textContent = Math.abs(result).toFixed(1) + "Ω";
});

reset.addEventListener("click",function() {
    vIn.value = "";
    vOut.value = "";
    res1.value = "";
    res2.textContent = "Resistor 2 result";
});