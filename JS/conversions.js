const decimal_in = document.getElementById("decimal-in");
const binaryIn  = document.getElementById("bin-in");
const hexIn     = document.getElementById("hex-in");

let lock = false; // prevents infinite loops

decimal_in.addEventListener("input", function () {
    if (lock) return;
    lock = true;

    if (decimal_in.value === "") {
        binaryIn.value = "";
        hexIn.value = "";
    } else {
        const dec = Number(decimal_in.value);
        binaryIn.value = dec.toString(2).padStart(8, '0');
        hexIn.value = dec.toString(16).toUpperCase();
    }

    lock = false;
});

binaryIn.addEventListener("input", function () {
    if (lock) return;
    lock = true;

    if (binaryIn.value === "") {
        decimal_in.value = "";
        hexIn.value = "";
    } else {
        const dec = parseInt(binaryIn.value, 2);
        if (!isNaN(dec)) {
            decimal_in.value = dec;
            hexIn.value = dec.toString(16).toUpperCase();
        }
    }

    lock = false;
});

hexIn.addEventListener("input", function () {
    if (lock) return;
    lock = true;

    if (hexIn.value === "") {
        binaryIn.value = "";
        decimal_in.value = "";
    } else {
        const dec = parseInt(hexIn.value, 16);
        if (!isNaN(dec)) {
            decimal_in.value = dec;
            binaryIn.value = dec.toString(2).padStart(8, '0');
        }
    }

    lock = false;
});
