function number ( num1, num2){
    if (typeof num1 !== 'number'){
        return 'num1 Place provide a number';
    }
    else if (typeof num2 !== 'number'){
        return 'num2 Place provide a number';
    }
    const result = num1 * num2;
    return result;
}
// const result = number(5, 7);
const result = number(5, 'seven');
console.log(result);


// Or 
function fullName ( name1 , name2){
    if (typeof name1 !== 'string' || typeof name2 !== 'string'){
        return 'Place provide a string';
    }
    const full = name1 + ' ' + name2;
    return full;
}
// const full = fullName( 'Kamal', 'Jamal');
const full = fullName( 'Kamal', 7);
console.log(full);



function getPrice (product){
    if (typeof product !== 'object'){
        return 'Place provide an object';
    }
    const price = product.price;
    return price;
}
// const price = getPrice({name: 'Badam jus', price: 30, color: 'Badami'});
const price = getPrice(20);
console.log(price);



function getArray (numbers){
    if (Array.isArray(numbers) === false){
        return 'Place provide an array'
    }
    const number = numbers[1];
    return number;
}
// const num = getArray ([10, 21, 20]);
const num = getArray (10);
console.log(num);