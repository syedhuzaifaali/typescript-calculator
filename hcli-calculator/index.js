"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter your first number: \n');
    var operator = (0, readline_sync_1.question)('Enter Operator: \n');
    var secondStr = (0, readline_sync_1.question)('Enter your second number: \n');
    var validInpute = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInpute) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('\ninvalid input\n');
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '/':
            return firstNum / secondNum;
        case '*':
            return firstNum * secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeName = parseInt(str);
    var isNum = !isNaN(maybeName);
    return isNum;
}
main();
