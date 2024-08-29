let firstnum;
let secondNum;
let operator;
let displayText = '';
const regex = /\+|\-|\*|\//g;



const display = document.getElementById("display");

const equalsButton = document.getElementById("=");

const clearButton = document.getElementById("CLR");

const deleteButton = document.getElementById("DEL");

const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        if(button.id !== '=' && button.id !== 'CLR' && button.id !== '+' && button.id !== '-' && button.id !== '/' && button.id !== '*' && button.id !== 'DEL'){
        button.addEventListener("click", function(e) {
            updateDisplay(button.id);
        });
    }
    });

const operatorButtons = document.querySelectorAll(".operator");
    operatorButtons.forEach((button) => {
        button.addEventListener("click", function(e) {
            if (((displayText.match(regex)) || []).length >= 1){
                parseDisplay();
                displayText = displayText + button.id;
                display.textContent = displayText;
            }
            else{
                updateDisplay(button.id);
            }
        });
    });

equalsButton.addEventListener("click", function(e) {
    parseDisplay();
});

clearButton.addEventListener("click", function(e) {
    displayText = '';
    display.textContent = displayText;
});

deleteButton.addEventListener("click", function(e) {
    displayText = displayText.substring(0, displayText.length - 1);
    display.textContent = displayText;
});

function add(firstNum, secondNum){
    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);
    return firstNum + secondNum;
}
function subtract(firstNum, secondNum){
    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);
    return firstNum - secondNum;
}
function multiply(firstNum, secondNum){
    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);
    return firstNum * secondNum;
}
function divide(firstNum, secondNum){
    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);
    if (firstNum / secondNum == 'Infinity'){
        return 'Bullshit. Press CLR to reset calculator.'
    }
    else{
        return firstNum / secondNum;
    }

}

function updateDisplay(buttonID){
    displayText = displayText + buttonID;
    display.textContent = displayText;
}

function parseDisplay(){
    let splitArray;
    if(displayText.includes('+')){
        splitArray = displayText.split('+');
        if(splitArray[1] == ''){
            displayText = splitArray[0];
            display.textContent = displayText;
        }
        else{
            displayText = operate(splitArray[0],splitArray[1],'+');
            display.textContent = displayText;
        }
        
    }
    else if(displayText.includes('-')){
        splitArray = displayText.split('-');
        displayText = operate(splitArray[0],splitArray[1],'-');
        display.textContent = displayText;
    }
    else if(displayText.includes('/')){
        splitArray = displayText.split('/');
        displayText = operate(splitArray[0],splitArray[1],'/');
        display.textContent = displayText;
    }
    else if(displayText.includes('*')){
        splitArray = displayText.split('*');
        displayText = operate(splitArray[0],splitArray[1],'*');
        display.textContent = displayText;
    }
}

function operate(firstNum,secondNum,operator){
    if(operator === '+'){
        return (add(firstNum,secondNum));
    }
    else if(operator === '-'){
        return (subtract(firstNum,secondNum));
    }
    else if(operator === '*'){
        return (multiply(firstNum,secondNum));
    }
    else if(operator === '/'){
        return (divide(firstNum,secondNum));
    }
}

console.log(operate(22,4,'add'));
console.log(operate(87,49,'subtract'));
console.log(operate(11,6,'multiply'));
console.log(operate(60,5,'divide'));