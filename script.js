const calcDisplayValue = document.querySelector("#calc-display-value");
const container = document.querySelector("#grid-container");
const operationResult = document.querySelector("#operation-result");
const currentOperation = document.querySelector("#current-operation");
const operatButton = document.querySelectorAll(".operat-button");
const numButton = document.querySelectorAll(".num-button");
const mathButton = document.querySelectorAll(".math-button");
const clearBtn = document.querySelector("#ac");
const delBtn = document.querySelector("#del");
const equalBtn = document.querySelector("#equal");
let firstNumber = "";
let secondNumber = "";
let operator = "";
let current = "";
let result = "";


// Mathematical operations

function add(num1, num2) {
    return num1 + num2;
}

function subsctract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function percentage(num1, per) {
    return (num1/100)*per;
}

function calcu(num1, operat, num2) {
    if (operat === "+") {
        return add(num1, num2);
    } else if (operat === "-") {
        return subsctract(num1, num2);
    } else if (operat === "/") {
        return divide(num1, num2);
    } else if (operat === "*") {
        return multiply(num1, num2);
    } else if (operat === "%") {
        return percentage(num1, num2);
    }
}




// Add Event Listeners to the Calculator Buttons
numButton.forEach( (numBtn) => {
    numBtn.addEventListener("click", addNum);
});

function addNum(num) {
    current += String(num.target.id);
    showCurrentOperation();
}

operatButton.forEach( (operatBtn) => {
    operatBtn.addEventListener("click", addOperat);
});

function addOperat(operat) {
    current += String(" " + operat.target.id + " ");
    showCurrentOperation();
};


clearBtn.addEventListener("click", () => {
    current = "";
    result = "";
    currentOperation.textContent = "";
    operationResult.textContent = "";
});

// delBtn.addEventListener("click", () => {
//     console.log(current);
//     current.slice(0, - 1);
//     console.log(current);
//     console.log("dele");
// });

equalBtn.addEventListener("click", () => {
    console.log("total");
firstNumber = 10;
operator = "+";
secondNumber = 20;
    result = calcu(firstNumber, operator, secondNumber);
    showResult();
});




// Calculator functionality

function showCurrentOperation() {
    currentOperation.textContent = current;
}

function showResult() {
    operationResult.textContent = result;
}


