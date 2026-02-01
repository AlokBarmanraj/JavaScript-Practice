function evenOfNumber (numbers){
    // console.log(numbers); //Only check
    let evenNumber = [];
    for(const number of numbers){
        // console.log(number); //Only check
        if(number % 2 === 0){
            console.log(number);
            evenNumber.push(number);
        }
    }
    return evenNumber;
}
const evenNumber = [3, 4, 5, 6, 7, 8, 9, 10];
const evens =evenOfNumber(evenNumber);
console.log('Even number even-->', evens);




function sumOfEvenNumber (numbers){
    let sumNumber = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            sumNumber = sumNumber + number;
        }
    }
    return sumNumber;
}
const sumNumber = [2, 3, 4, 5, 6, 7, 8];
const sumNumberTotal = sumOfEvenNumber(sumNumber);
console.log('Sum number total sum-->', sumNumberTotal);