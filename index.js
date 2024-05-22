let displayNum = document.getElementById("display-num");
displayNum.textContent = ""; //Make sure display-num clear

let firstNumber = ""; //First Number null
let currentOperator = ""; //Current Operator null
let isSecondNumber = false; //Boolean variable for making previous number dissapear before adding secondNumber


function addNumber(number){
    // If-else funct for the user after input the secondNumber 
    // then the display will be clear and isSecondNumber will be false because it will be 
    // change to firstNumber again
    if(isSecondNumber){
        displayNum.textContent = "";
        isSecondNumber = false;
    }
    displayNum.textContent += number;
} 

function selectOperator(operator){
    firstNumber  = displayNum.textContent;
    currentOperator = operator;
    displayNum.textContent = "";
    isSecondNumber = true; //Activate the secondNumber after select the operator
}