
//display numbers being clicked in the display
// when symbol is pressed, add that number to the container.
//display number being clicked until another symbol is pressed. 
//add that number to the container and perform the symbol pressed operation on the two numbers in number Container
// add the result of operation to the number container and remove the first two numbers, 

var numbersArr = [];
var symbol = '';
var result = '';
var displayValue = '';
var displayValue2= [];

const initialValue = 0;
const display1 = document.getElementById('display');
const display2 = document.getElementById('display2');
display(initialValue, display1);


//Two back to back symbols in display
//delete button
//styling

const numbers = document.querySelectorAll('.number');
numbers.forEach((number)=> number.addEventListener('click', displayNumber));

const symbols = document.querySelectorAll('.symbol');
symbols.forEach((symbol)=> symbol.addEventListener('click', symbolClicked));

const clear = document.getElementById('clear');
clear.addEventListener('click',reset)

function symbolClicked(e){
    
    // only add number to array if there is a number is display. If symbol is the first thing that is clicked, don't add.
    if (displayValue != ''){
        addtoArr(e);
        
    }     

    // only add symbol to displayValue2 if there is a number before it i.e. it's length is not 0
// and last element is a digit, isNumber?, then add symbol otherwise ignore. 
   //if = is pressed before two numbers are inputted int he numbersArr, exit.

    if (numbersArr.length < 2 && e.target.value ==='='){
        displayValue = '';

        return;
    }
    
    // set value of number if this symbol after first number.
   if (numbersArr.length < 2){
        symbol = e.target.value;
    }

    else{    
        result = operate(symbol,numbersArr[0],numbersArr[1]);
        display(result, display1);
        numbersArr.push(result)
        numbersArr.shift();
        numbersArr.shift();

        // save the symbol clicked for next calculation if = is not pressed. 
        if (e.target.value != '='){
            symbol = e.target.value;
        }
    }
    // displayValue which stored the previous number before symbol was clicked is reset for next input number.
    displayValue = '';

    
}

function addtoArr(e){
    numbersArr.push(displayValue);
    displayValue2.push(displayValue);

}

function displayNumber(e){
    if (e.target.value == '.' && displayValue.includes('.')){
        return;
    }

    displayValue += e.target.value;
    display(displayValue, display1);
    
    
}

function display(value, displayContainer){
    
    displayContainer.textContent = value;

}



const sum = function(a,b){
    return (+a + +b);
}

const difference = function(a,b){
    return a - b;
}

const product = function (a,b){
    return a * b;
}

const divide = function(a,b){
    if (b == 0){
        return 'ERROR'
    }
    else{
        return a / b;
    }
}

function operate(symbol, a, b){
    switch(symbol){
        case '+':
            return sum(a,b);
            break;
        case '-':
            return difference(a,b);
            break;
        case '*':
            return product(a,b);
            break;
        case '/':
            return divide(a,b);
            break;
        
    }
}

function reset(e){
    numbersArr.length = 0;
    symbol = '';
    result ='';
    displayValue = '';
    displayValue2.length = 0;
    
    display(displayValue, display2);
    display(initialValue, display1);
    
}

