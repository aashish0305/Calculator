let display = document.getElementById('display');
let currentOperand = '';
let currentOperator = '';
let result = 0;

function appendNumber(number) {
    currentOperand += number;
    display.value = currentOperand;
}

function appendOperator(operator) {
    currentOperator = operator;
    if (currentOperand !== '') {
        result = parseFloat(currentOperand);
        currentOperand = '';
    }
}

function appendDecimal() {
    if (!currentOperand.includes('.')) {
        currentOperand += '.';
        display.value = currentOperand;
    }
}

function calculate() {
    if (currentOperand !== '') {
        switch (currentOperator) {
            case '+':
                result += parseFloat(currentOperand);
                break;
            case '-':
                result -= parseFloat(currentOperand);
                break;
            case '*':
                result *= parseFloat(currentOperand);
                break;
            case '/':
                result /= parseFloat(currentOperand);
                break;
            default:
                break;
        }
        display.value = result;
        currentOperand = '';
    }
}

function clearDisplay() {
    display.value = '';
    currentOperand = '';
    currentOperator = '';
    result = 0;
}
