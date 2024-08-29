let firstnum;
let secondNum;
let operator;
let displayText = '';

const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        if(button.id !== '=' && button.id !== 'CLR'){
        button.addEventListener("click", function(e) {
            updateDisplay(button.id);
        });
    }
    });



function add(firstNum, secondNum){
    return firstNum + secondNum;
}
function subtract(firstNum, secondNum){
    return firstNum - secondNum;
}
function multiply(firstNum, secondNum){
    return firstNum * secondNum;
}
function divide(firstNum, secondNum){
    return firstNum / secondNum;
}

function updateDisplay(buttonID){
    displayText = displayText + buttonID;
    display.textContent = displayText;
}

function operate(firstNum,secondNum,operator){
    if(operator === 'add'){
        return (add(firstNum,secondNum));
    }
    else if(operator === 'subtract'){
        return (subtract(firstNum,secondNum));
    }
    else if(operator === 'multiply'){
        return (multiply(firstNum,secondNum));
    }
    else if(operator === 'divide'){
        return (divide(firstNum,secondNum));
    }
}

console.log(operate(22,4,'add'));
console.log(operate(87,49,'subtract'));
console.log(operate(11,6,'multiply'));
console.log(operate(60,5,'divide'));