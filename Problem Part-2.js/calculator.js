function add (num1, num2){
    sum = num1 + num2;
    return sum;
}

function subtract (num1, num2){
    minas = num1 - num2;
    return minas;
}

function multiply ( num1, num2){
    gun = num1 * num2;
    return gun;
}

function divide (num1, num2){
    vig = num1 / num2;
    return vig;
}

function calculator (a, b, operation){
    if (operation === 'add'){
        const result = add(a, b);
        return result;
    }
    else if (operation === 'subtract'){
        const result = subtract(a, b);
        return result;
    }
    else if (operation === 'multiply'){
        const result = multiply(a, b);
        return result;
    }
    else if (operation ==='divide'){
        const result = divide(a, b);
        return result;
    }
    else{
        return "Only 'add', 'subtract', 'multiply', 'divide' operation is allowed. "
    }
}
const result = calculator(5, 7, 'multiply');
console.log(result);