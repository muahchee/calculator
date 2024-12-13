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

        //clears previous completed operations
        if (equationArr.length === 1){
            equationArr = [];
        }
        
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

//-equals button-
const equalsButton = document.querySelector(".equals");

equalsButton.addEventListener("click", () => {
    
    equationArr.push(displayNumber);

    //if equationArr.length === 1, return equationArr[0] in display.textContent
    if (equationArr.length === 1){

        display.textContent = equationArr[0];

    } else {

        //clear display and variables
        inputNumber = [];
        displayNumber = "";
        display.textContent = "";     
        
        for (let i = 0; i < equationArr.length; i++){
            let result = operate(Number(equationArr[0]), equationArr[1], Number(equationArr[2]));

            //remove first three items and replace with result
            equationArr.splice(0, 3, result);

        }

        display.textContent = equationArr[0];

    }

    //else if equationArr.length % 3 === 0,

    //push displayNumber to equationArr
    //clear display and variables

    //loop (i = 0, i <= equationArr.length,)
    //call operate on first three indexes, turn first and third index into numbers (firstNumber and secondNumber) and store result in 'result'
    //remove first three items from equationArr
    //use unshift to put result at equationArr[0]

    //after loop (there should be one item in equationArr),
    //display.textContent = equationArr[0];
})

