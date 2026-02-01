
function sumOfNumber (numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum
}
const numbs = [2, 3, 4 ,5];
const sum = sumOfNumber(numbs);
console.log('Total sum -->', sum);