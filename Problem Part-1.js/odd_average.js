function oddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if( number % 2 === 1){
            console.log(number);
            odds.push(number);
        }
    }
    console.log(odds);
    let sum = 0;
    for(number of odds){
        sum = sum + number;
    }
    const oddLength = odds.length;
    console.log('Total Sum-->', sum, 'total sum Length-->', oddLength );
    const avg = sum /oddLength;
    return avg;

}
const numbers =[42, 13, 58, 65, 81, 96, 7]
const avg = oddAverage(numbers);
console.log('Total odd Number Average', avg);