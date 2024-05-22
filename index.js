let displayNum = document.getElementById("display-num");
displayNum.textContent = "";

let currentNumber = "";
let firstNumber = null;
let secondNumber = null;

let operator = null;

function addNumber(number){
    if (displayNum.textContent === ""){
        displayNum.textContent = number;
    } else {
        displayNum.textContent += number;
    }
    currentNumber = displayNum.textContent;
} 

function selectOperator(operator){
    firstNumber  = parseFloat(currentNumber);
    operator = op;
    currentNumber = "";
}

