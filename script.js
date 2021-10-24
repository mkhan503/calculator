const buttons = document.querySelectorAll('button');
buttons.forEach((button)=> button.addEventListener('click', display));

function display(e){
    const displayValue = e.target.value;
    console.log (displayValue);
    const display = document.getElementById('display');
    display.textContent = displayValue;


}




function getSum(a,b){
    return a + b;
}

function getDifference(a,b){
    return a - b;
}

function getDivide(a,b){
    if (b = 0){
        // return error
    }
    else{
        return (a / b);
    }
}

function getProduct(a,b){
    return a * b;
}

function operate(a,op,b){
    if (op = "+"){
        return getSum(a,b);
    }
    else if (op = "-"){
        return getDifference(a,b);
    }
    else if (op = "/"){
        return getDivide(a,b);
    }
    else if (op = "*"){
        return getProduct(a,b);
    }
}