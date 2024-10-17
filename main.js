// *************HTML/CSS VALUES********************
const displayScreen = document.getElementById("display-screen");
const buttons = document.querySelectorAll(".button");
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");

const clearButton = document.getElementById("clear");

// ***************VALUES***********
let firstNumber = "";
let secondNumber = "";
let currentOperation = "";
let isFirstNumberComplete = false;

displayScreen.innerHTML = "";

clear.addEventListener("click", () => {
    clearValues();
});

function clearValues() {
    firstNumber = "";
    secondNumber = "";
    currentOperation = "";
    isFirstNumberComplete = false;
    displayScreen.innerHTML = "";
}

// ***************NUMBER HANDLER ***********************
numberButtons.forEach(button => {
    button.addEventListener("click", () => { 
        const num = button.textContent;
        if(!isFirstNumberComplete){
            firstNumber += num;
            displayScreen.innerHTML = firstNumber;
        } else {
            secondNumber += num;
            displayScreen.innerHTML = secondNumber;
        }                    
    });   
});

// *************OPERATION HANDLER ******************
operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        const operation = button.textContent;

        if(operation === "="){
            if(firstNumber !== "" && secondNumber !== "" && currentOperation !== ""){
                calculateResult();
            }
        } else {
            if(!isFirstNumberComplete && firstNumber !== "") {
                isFirstNumberComplete = true;
                currentOperation = operation;
            };
        }
    });
});

// ***********CALCULATE RESULT ************
function calculateResult() {
    let result;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    switch (currentOperation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
        break;
        case "/":
            result = num2 === 0 ? "Error" : num1 / num2;
            break;
        case "x":
            result = num1 * num2
        break;
        default:
            return;
    }
// ********DISPLAY RESULT ******************
    displayScreen.innerHTML = result;
    firstNumber = result.toString();
    secondNumber = "";
    currentOperation = "";
    isFirstNumberComplete = false;
}


    