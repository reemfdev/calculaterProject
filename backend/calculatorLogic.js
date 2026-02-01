let num1 = null;
let num2 = null;
let operator = null;
let result = null;

function setNum1(value) {
    num1 = parseFloat(value);
}

function setNum2(value) {
    num2 = parseFloat(value);
}

function setOperator(op) {
    operator = op;
}
while (true) {
function calculate() {
    if (num1 === null || num2 === null || operator === null) {
        throw new Error("Incomplete input");
    }

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                throw new Error("Division by zero");
            }
            result = num1 / num2;
            break;
        default:
            throw new Error("Invalid operator");
    }

    return result;
}
}
