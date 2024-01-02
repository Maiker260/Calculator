const calcDisplayValue = document.querySelector("#calc-display-value");
const container = document.querySelector("#grid-container");
const operationResult = document.querySelector("#operation-result");
const currentOperation = document.querySelector("#current-operation");
const operatButton = document.querySelectorAll(".operat-button");
const numButton = document.querySelectorAll(".num-button");
const clearBtn = document.querySelector("#ac");
const delBtn = document.querySelector("#del");
const equalBtn = document.querySelector("#equal");
const dot = document.querySelector("#dot");
let firstNumber = "";
let operator = "";
let secondNumber = "";
let current = "";
let result = "";


// Mathematical operations

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    if (num2 === 0 ) {
        secondNumber = "";
        alert("Not is possible to divide by 0");
    } else {
        return num1 / num2;
    }
}

function multiply(num1, num2) {
    return num1 * num2;
}

function percentage(num1, per) {
    return (num1 / 100) * per;
}

function resultCalculation(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2)
        case "/":
            return divide(num1, num2);
        case "*":
            return multiply(num1, num2)
        case "%":
            return percentage(num1, num2);
    }
}


// Add Event Listeners to the Calculator Buttons
numButton.forEach( (numBtn) => {
    numBtn.addEventListener("click", addNum);
});

operatButton.forEach( (operatBtn) => {
    operatBtn.addEventListener("click", addOperat);
});

dot.addEventListener("click", floatOperations);

clearBtn.addEventListener("click", clearCalculator);

delBtn.addEventListener("click", deleteLastChar);

equalBtn.addEventListener("click", useEqualBtn);


// Calculator functionality
function addNum(num) {
    checkBeforeClear();
    const numValue = num.target.id;
    current += String(numValue);
    assignNum(numValue);
    showCurrentOperation();
}

function assignNum(num) {
    if (operator === "") {
        firstNumber += num 
    } else {
        secondNumber += num;
    }
}

function addOperat(operat) {
    denyDuplicateOperat();
    calculateCurrent();
    operator = operat.target.id;
    current += String(" " + operat.target.textContent + " ");
    showCurrentOperation();
};

function calculateCurrent() {
    if (secondNumber !== "") {
        firstNumber = resultCalculation(parseInt(firstNumber), operator, parseInt(secondNumber))
        secondNumber = "";
    }  

    result = firstNumber;
    operationResult.textContent = result;
}

function deleteLastChar() {

    if (current.charAt(current.length - 1) === " ") {
        current = current.slice(0, -3);
        operator = "";
    } else {
        
        if (secondNumber !== "") {
            secondNumber = String(secondNumber);
            secondNumber = secondNumber.slice(0, -1)
        } else {
            firstNumber = String(firstNumber);
            firstNumber = firstNumber.slice(0, -1);
        }

        current = current.slice(0, -1);

    if (result !== "" && operator == "") {
        clearCalculator();
    }

    }
    showCurrentOperation();
}

function checkBeforeClear() {
    if (result !== "" && operator == "") {
        clearCalculator();
    }
}
function clearCalculator() {
    current = "";
    result = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";

    currentOperation.textContent = "";
    operationResult.textContent = "";
}

function denyDuplicateOperat() {
    if (current.charAt(current.length - 1) === " ") {
        current = current.slice(0, -2);
    }
}

function floatOperations(value) {
    checkBeforeClear();
    denyDuplicateDot();
    const dot = value.target.textContent;
    current += String(dot);
    assignNum(dot);
    showCurrentOperation();
}

function denyDuplicateDot() {
    if (current.charAt(current.length - 1) === ".") {
        current = current.slice(0, -1);
        removeDot();
    }
}

function removeDot() {
    if (secondNumber.charAt(secondNumber.length - 1) === ".") {
        secondNumber = secondNumber.slice(0, -1);
    } else if (firstNumber.charAt(firstNumber.length - 1) === ".") {
        firstNumber = firstNumber.slice(0, -1);
    }
}

function showCurrentOperation() {
    currentOperation.textContent = current;
}

function useEqualBtn() {
    if (secondNumber === "") {
        operationResult.textContent = result;
    } else {
        showResult();
    }
}

function showResult() {
    result = resultCalculation(parseFloat(firstNumber), operator, parseFloat(secondNumber));
    operationResult.textContent = result;
    
    firstNumber = result;
    operator = "";
    secondNumber = "";
}
