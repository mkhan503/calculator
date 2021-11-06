let dataObj = {
    val1:'', 
    val2:'',
    symbol:'',
};
let displayValue = '';
const initialValue = 0;
let result;

const display1 = document.getElementById('display');
const display2 = document.getElementById('display2');
const deleteIt = document.getElementById('delete');
const numbers = document.querySelectorAll('.number');
const symbols = document.querySelectorAll('.symbol');
const clear = document.getElementById('clear');

symbols.forEach((symbol)=> symbol.addEventListener('click', symbolClicked));
clear.addEventListener('click',reset);
deleteIt.addEventListener('click', erase);
numbers.forEach((number)=> number.addEventListener('click', displayNumber));

display(initialValue, display1);

function symbolClicked(e){
    //if number is clicked then that is display value, if directly symbol is clicked then return 
    //UPLOAD values to object
    if (dataObj.val1 === '' && displayValue ===''){
        return;       
    }

    if (dataObj.val1 === '' && e.target.value === '='){
        return;
    }

    
    

    //if there is no value in val1, then assign to it, else to val2
    if(dataObj.val1 === ''){
        dataObj.val1 = displayValue;
        dataObj.symbol = e.target.value;
        //displayValue is uploaded to obj, reset it.
        displayValue = '';
               
        const displayString = dataObj.val1 + dataObj.symbol;
        display(displayString, display2);

    }

    //if last pressed was equal and a result was previously calculated, just update the symbol in obj so that next operation can be stored. otherwise
    // else block will add value 2 as per the display
   else if(dataObj.symbol === '=' && dataObj.val1 === result){
        const displayString2 = dataObj.val1 + e.target.value;
        dataObj.symbol = e.target.value;
        display(displayString2, display2);
        displayValue = '';
    

   }
   //if there is already a valid value in val1, add displayValue to val2, and calculate result. 

    else if (dataObj.val2 === ''){
        dataObj.val2 = displayValue;
            displayValue = '';
            result = operate(dataObj);
            display(result, display1);
        // add if statement to ensure that result goes to display2 when symbol other than = is pressed. 
        if(e.target.value != '='){            
            const displayString = result + e.target.value ;
            display(displayString, display2)
        }
        else{
            const displayString = dataObj.val1 + dataObj.symbol + dataObj.val2 + '=' ;
            display(displayString, display2)
        }

         //reset values((in displayNumber function) if = is the symbol, else keep result in val1 for further calculation. 

        dataObj.val1 = result;
        dataObj.val2 = '';
        dataObj.symbol = e.target.value;


    }
}

function erase(e){
    if (display1.textContent != result){
        const len = displayValue.length;
        displayValue = displayValue.substring(0, len - 1 );
        display(displayValue, display1);
    }
    else{
        reset();
    }

}

//keeps displaying clicked number until a symbol is clicked. 
function displayNumber(e){
    if (e.target.value == '.' && displayValue.includes('.')){
        return;
    }

    if (dataObj.symbol === '='){
        dataObj.val1 = '';
        dataObj.val2 = '';
        dataObj.symbol= '';
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

function operate(Obj){
    switch(Obj.symbol){
        case '+':
            return sum(Obj.val1,Obj.val2);
            break;
        case '-':
            return difference(Obj.val1,Obj.val2);
            break;
        case '*':
            return product(Obj.val1,Obj.val2);
            break;
        case '/':
            return divide(Obj.val1,Obj.val2);
            break;
        
    }
}

function reset(e){
    dataObj.val1 = '';
    dataObj.val2 = '';
    dataObj.symbol = '';
    result ='';
    displayValue= '';
    display(initialValue, display1);
    display('', display2);
    
}

