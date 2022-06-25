// Simple javascript calculator
function compute() {
    let symbol = prompt("Please enter operator, e.g +,-,/,*");
    let firstNumber = Number(prompt("Enter first number"));
    let secondNumber = Number(prompt("Enter second number"));

    let result;
    if (symbol == '+') {
        result = firstNumber + secondNumber;
        confirm(result);
    }
    else if (symbol == '-') {
        result = firstNumber - secondNumber;
        confirm(result);
    }
    else if (symbol == '/') {
        result = firstNumber / secondNumber;
        confirm(result);
    }
    else if(symbol == '*')
    {
        result = firstNumber * secondNumber;
        confirm(result);
    }
}

// calling function compute()
compute();