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

//stores array of numbers pushed after each button press
let inputNumber = [];

//stores string after mashing inputNumber array into string. this number will be displayed in '.display'
let displayNumber;

//-full equation array- (have to be broken up to firstNumber, operator and secondNumber later)
let equationArr = [];

//buttons
const display = document.querySelector(".display");

//-digit buttons-
const digitButtons = document.querySelectorAll(".digit");

digitButtons.forEach((digit) => {
    digit.addEventListener("click", () => {
        //todo! 
        //push digit.id to inputNumber array
        //mash inputNumber into string and put in displayNumber
        inputNumber.push(digit.id);
        displayNumber = inputNumber.join("");
        display.textContent = displayNumber;
    })
});


//-operator buttons-
const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach((operator) => {
    operator.addEventListener("click", () => {
        //todo! 
        //if displayNumber doesnt equal "",
        //push displayNumber to equationArr
        //set inputNumber = [] and displayNumber = "" (empty them)
        //empty display
        //push operator.id to equationArr

        if (displayNumber != undefined){
            equationArr.push(displayNumber);

            //clear display and variables
            inputNumber = [];
            displayNumber = "";
            display.textContent = "";

            equationArr.push(operator.id);
            
        }
 
    })
})

