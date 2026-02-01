function tenTime (number){
    const result = number * 2;
    return result;
}
const output = tenTime(50);
console.log( 'Result', output);




function add ( price1, price2){
    const total = price1 + price2;
    return total;
}
const price = add(20, 25);
console.log(price);


// return shortcut
function add1 (price3, price4){
    return price3 + price4;
}
const result = add1(30, 40);
console.log(result);



function math (x, y){
    const plus = x + y;
    const minus = x - y;
    const multiplication = plus * minus;
    const divided = multiplication / 2;
    return divided
}
const equals = math(30, 20);
console.log(equals);