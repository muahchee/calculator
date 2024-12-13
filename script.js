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
    if (b === 0) {
        return "HOW DARE YOU!"
    } else {
        return a / b;
    }
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

        //ignore consecutive operator input, checks if last item is operator 
        if (equationArr[equationArr.length - 1] != '+' && equationArr[equationArr.length - 1] != '-' && equationArr[equationArr.length - 1] != '*' && equationArr[equationArr.length - 1] != '/'){

            //check if there is something in displayNumber, if yes then...
            if (displayNumber != undefined){
                
                equationArr.push(displayNumber);

                //clear variable
                inputNumber = [];

                //operate on first three items when second operator is pressed
                if (equationArr.length === 3){
                    let result = operate(Number(equationArr[0]), equationArr[1], Number(equationArr[2]));

                    equationArr.splice(0, 3, result);

                    // check if result is not "HOW DARE YOU" (response to dividing by 0)
                    if (equationArr[0] != "HOW DARE YOU!"){

                    //rounds to 5 decimal places, removes .00000
                    display.textContent = equationArr[0].toFixed(5).replace(/\.00000$/, '');

                    } else {
                        display.textContent = equationArr[0];
                    }
                }

                equationArr.push(operator.id);

                
            }
        }

    })
})

//-equals button-
const equalsButton = document.querySelector(".equals");

equalsButton.addEventListener("click", () => {
    
    equationArr.push(displayNumber);

    //if there's just a number in equationArr, display it
    if (equationArr.length === 1){

        display.textContent = equationArr[0];

    } else {
        //clear display and variables
        inputNumber = [];
        displayNumber = "";
        display.textContent = "";     

        //operate on + and -
        for (let i = 0; i < equationArr.length; i++){
            let result = operate(Number(equationArr[0]), equationArr[1], Number(equationArr[2]));

            //remove first three items and replace with result
            equationArr.splice(0, 3, result);

        }

        // check if result is not "HOW DARE YOU" (response to dividing by 0)
        if (equationArr[0] != "HOW DARE YOU!"){

            //rounds to 5 decimal places, removes .00000
            display.textContent = equationArr[0].toFixed(5).replace(/\.00000$/, '');

        } else {
            display.textContent = equationArr[0];
        }

    }

})

//-clear button-
const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
    //clear display and variables
    inputNumber = [];
    displayNumber = "";
    display.textContent = "";  
    equationArr = []; 
})

//-delete button-

