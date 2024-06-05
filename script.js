let displayValue = '0';
let operator = '';
let operand1 = '';
let operand2 = '';
let result = '';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    operand1 = '';
    operand2 = '';
    operator = '';
    result = '';
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = '';
    }
    displayValue += number;
    updateDisplay();
}

function appendOperator(op) {
    if (operator !== '') {
        calculate();
    }
    operator = op;
    operand1 = displayValue;
    displayValue = '0';
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function calculate() {
    operand2 = displayValue;
    switch (operator) {
        case '+':
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            if (parseFloat(operand2) !== 0) {
                result = parseFloat(operand1) / parseFloat(operand2);
            } else {
                result = 'Error';
            }
            break;
    }
    displayValue = result.toString();
    operator = '';
    operand1 = '';
    operand2 = '';
    updateDisplay();
}

updateDisplay();
