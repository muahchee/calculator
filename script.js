//add
function add(a, b){
    return a + b;
}

//subtract
function subtract(a, b){
    return a - b;
}

//multiply
function multiply(a, b){
    return a * b;
}

//divide
function divide(a, b){
    return a / b;
}

let firstNumber;
let operator;
let secondNumber;

//decide which function to apply to arguments
function operate (firstNumber, operator, secondNumber){
    let result;
    switch (operator) {
        case '+':
            result = add(firstNumber, secondNumber);
            break;
        
        case '-':
            result = subtract(firstNumber, secondNumber);
            break;

        case '*':
            result = multiply(firstNumber, secondNumber);
            break;

        case '/':
            result = divide(firstNumber, secondNumber);
            break;
    }
    return result;
}

//buttons
const display = document.querySelector(".display");
const digitButtons = document.querySelectorAll(".digit");

digitButtons.forEach((digit) => {
    digit.addEventListener("click", () =>
    display.textContent = digit.id);
})
