<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arduino Dashboard</title>
    <link rel="stylesheet" href="css/index.css">
</head>

<body>
    <?php include "Header.php"; ?>
    <div class="main-container">
        <div class="group-row" id="mini-cards">
            <div class="card" id="binhexdec-div">
                <h1>DEC2BIN2HEX🧠</h1>
                <div class="space"></div>
                <input type="text" id="decimal-in" class="input-field" placeholder="Decimal">
                <input type="text" id="bin-in" class="input-field" placeholder="Binary (8bit)">
                <input type="text" id="hex-in" class="input-field" placeholder="Hexadecimal">
            </div>
            <div class="card" id="pwmSim-div">
                <h1>PWM simulator</h1>
                <div class="group-row">
                    <input type="range" id="ledSlider" class="input-field">
                    <div class="break"></div>
                    <div class="bright-show"></div>
                </div>
            </div>
        </div>
        <div class="ohms-container card">
            <div class="group-col">
                <a id="resetVector" href="#"><h1>Ohm's Law Calculator⚡</h1></a>
                <input class="input-field" id="voltage" type="number" placeholder="Enter voltage (V)">
                <input class="input-field" id="current" type="number" placeholder="Enter current (A)">
                <input class="input-field" id="resistance" type="number" placeholder="Enter resistance (Ω)">
                <button id="ohms-calc-btn" >Calculate</button>
                <label id="ohms-result" class="resultLabel" for="">Result</label>
            </div>
        </div>
        <div class="break"></div>
        <div class="card">
            <div class="group-col">
                <a id="voltageReset" href="#voltageReset"><h1>Voltage Divider🔋</h1></a>
                <input required class="input-field" id="vd-in" type="number" placeholder="Enter V-IN (V)">
                <input required class="input-field" id="vd-out" type="number" placeholder="Enter V-OUT (V)">
                <input required class="input-field" id="vd-resistance" type="number" placeholder="Enter resistor 1 (Ω)">
                <button id="vd-calc">Calculate</button>
                <label id="resistorLabel" class="resultLabel" for="">Resistor 2 result</label>
            </div>
        </div>
        <div class="break"></div>
        <div class="card">
            <div class="group-col">
                <a id="pwm-reset" href="#pwm-reset"><h1>PWM Voltage Calculator💡</h1></a>
                <input class="input-field" id="pwm-v-in" type="number" placeholder="Enter V-IN (V)">
                <input class="input-field" id="pwm-v-out" type="number" placeholder="Enter V-OUT (V)">
                <button id="pwm-calc" >Calculate</button>
                <label id="duty-cycle-result" class="resultLabel" for="">Duty Cycle %</label>
                <label id="pwm-arduino-value" class="resultLabel" for="">PWM-Arduino Value (0-255)</label>
            </div>
        </div>
    </div>
    <script src="JS/ohmsCalculator.js"></script>
    <script src="JS/voltageDivider.js"></script>
    <script src="JS/pwmCalculator.js"></script>
    <script src="JS/conversions.js"></script>
</body>

</html>