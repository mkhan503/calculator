//figuring out how to use the last result value 

var numberContainer = [];
var symbolContainer = [];
var displayValue = '';
var result='';
// as long as numbers are being pressed, keep updating the display valye
const numbers = document.querySelectorAll('.number');
numbers.forEach((number)=> number.addEventListener('click', displayNumber));
//when a symbol is clicked, add the number in the displayValue to the numberContainer.
const symbol = document.querySelectorAll('.symbol');
symbol.forEach((number)=> number.addEventListener('click',symbolClicked));

function displayNumber(e){
    const display = document.getElementById('display');
    const len = numberContainer.length;
    //if display value is a number then keep adding
    
    if (displayValue != ''){
        displayValue += e.target.value;
        display.textContent = displayValue;
    }
    // a symbol is pressed then reset displayValue to start a new number 
    else{
        displayValue = e.target.value;
        display.textContent= displayValue;
    }
}
         
        

    

    //else if DV is not a number, then reset display value
    

function symbolClicked(e){
    //when symbol is pressed previous number is added to numberContainer.
    symbolContainer.push(e.target.value); 
    addToContainer(displayValue);
    displayValue ='';
    // I'm stopping here==> check if container has more than one value, then operation done on the last two values
    const len = numberContainer.length;
    if (len > 1){
        const answer = operate(symbolContainer[0], numberContainer[len - 1], numberContainer[len - 2]);
        const display = document.getElementById('display');
        display.textContent = answer;
        symbolContainer.shift();

    }
    
    
    
    
}

function addToContainer(value){
    numberContainer.push(displayValue);
    
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
    return a / b;
    //TO DO add /0 error
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


//If numberContainer has only one value don't perform any operation when operator symbol is clicked., else add the last two numbers.

  //create an object and operate on the last 2 numbers, when a button is pressed. 