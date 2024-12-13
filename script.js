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
        
        //check if there is something in displayNumber, if yes then...
        if (displayNumber != undefined){
            
            //add displayNumber to array
            equationArr.push(displayNumber);

            //clear variable
            inputNumber = [];

            console.log(equationArr)

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
                    console.log(equationArr);
                }
            }

                equationArr.push(operator.id);
                
                //to ignore consecutive operator inputs, without this, display number is reused when operate is invoked
                displayNumber = undefined;
        } 

        
    })
})


//-equals button-
const equalsButton = document.querySelector(".equals");

equalsButton.addEventListener("click", () => {

    equationArr.push(displayNumber);

    if (equationArr.length === 0){
        //displays if equals is pressed first
        display.textContent = "stop it";

    } else{
        //if there's just a number in equationArr, display it
        //if there's an operator at the end, ignore it
        if (equationArr.length === 1 || equationArr[equationArr.length - 1] === undefined){

            display.textContent = equationArr[0];

            equationArr.splice(equationArr.length - 1, 1);

            console.log(equationArr)

        } else {
            //clear display and variables
            inputNumber = [];
            displayNumber = undefined;
            display.textContent = undefined;     

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
    }
    

})

//-clear button-
const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
    //reset display and variables
    inputNumber = [];
    displayNumber = undefined;
    display.textContent = undefined;  
    equationArr = []; 
})

//-delete button-
const deleteButton = document.querySelector("#delete");

deleteButton.addEventListener("click", () => {

    //remove deleted number form inputNumber and displayNumber variables
    inputNumber.splice(inputNumber.length - 1, 1);
    displayNumber = displayNumber.slice(0, displayNumber.length - 1);

    //display new (shorter) number
    display.textContent = displayNumber;
})

//-keyboard support-

window.addEventListener("keydown", (e) => {
    //clears previous completed operations
    if (equationArr.length === 1){
        equationArr = [];
    }

    //checks if key pressed is 0-9 or . (digits)
    if (/[0-9..]/.test(e.key)){
        //push digit.id to inputNumber array
        //mash inputNumber into string and put in displayNumber
        inputNumber.push(e.key);
        displayNumber = inputNumber.join("");
        display.textContent = displayNumber;  
    }  

    //checks if key pressed is /*--+ (operator)
    if(/[//**--++]/.test(e.key)){

         //check if there is something in displayNumber, if yes then...
         if (displayNumber != undefined){
            
            //add displayNumber to array
            equationArr.push(displayNumber);

            //clear variable
            inputNumber = [];

            console.log(equationArr)

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
                    console.log(equationArr);
                }
            }

                equationArr.push(e.key);
                
                //to ignore consecutive operator inputs, without this, display number is reused when operate is invoked
                displayNumber = undefined;
        }        
    }

    if (e.key === '=' || e.key === 'Enter'){
        equationArr.push(displayNumber);

        if (equationArr.length === 0){
            //displays if equals is pressed first
            display.textContent = "stop it";
    
        } else{
            //if there's just a number in equationArr, display it
            //if there's an operator at the end, ignore it
            if (equationArr.length === 1 || equationArr[equationArr.length - 1] === undefined){
    
                display.textContent = equationArr[0];
    
                equationArr.splice(equationArr.length - 1, 1);
    
                console.log(equationArr)
    
            } else {
                //clear display and variables
                inputNumber = [];
                displayNumber = undefined;
                display.textContent = undefined;     
    
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
        }       
    }

    if (e.key === 'Escape' || e.key === 'NumLock'){
    //reset display and variables
    inputNumber = [];
    displayNumber = undefined;
    display.textContent = undefined;  
    equationArr = []; 
    }

    if(e.key === 'Delete' || e.key === 'Backspace'){
     //remove deleted number form inputNumber and displayNumber variables
     inputNumber.splice(inputNumber.length - 1, 1);
     displayNumber = displayNumber.slice(0, displayNumber.length - 1);
 
     //display new (shorter) number
     display.textContent = displayNumber;       
    }
})
