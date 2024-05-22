let displayNum = document.getElementById("display-num");
displayNum.textContent = "0";

let currentNumber = "0";
let firstNumber = null;
let secondNumber = null;

let operator = null;

function addNumber(number){
    if (displayNum.textContent === "0"){
        displayNum.textContent = number;
    } else {
        displayNum.textContent += number;
    }
    currentNumber = displayNum.textContent;
} 

function selectOperator(operator){
    firstNumber  = parseFloat(currentNumber);
    secondNumber = parseFloat(currentNumber);
    operator = op;
    currentNumber = "0";
}

