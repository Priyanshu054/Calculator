let calculation = "";
// let display = document.getElementById("display");

function append(value) {
    calculation += value;
    updateDisplay();
}

function updateDisplay() {
    display.value = calculation;
}

function allClear() {
    calculation = ''
    updateDisplay();
}

function deleteLast() {
    calculation = calculation.slice(0, -1);
    updateDisplay();
}

function percentage() {
    let result = eval(calculation);
    calculation = result/100;
    updateDisplay();
}

function calculate() {
    let result = eval(calculation);
    calculation = result;
    updateDisplay();
}