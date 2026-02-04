// Max Number 
const heights = [12,40,50,58,90,140,150,180];
const max =Math.max(12,40,50,58,90,140,150,180);
console.log(max);



// function
function maxNum (numbers){
    let max = numbers[0];
    for(const Number of numbers){
        if (Number > max){
            max = Number;
        }
    }
    return max
}
const num =[12,40,50,58,90,140,150,180];
const heigh = maxNum(num);
console.log(heigh);


// Min Number 
const minNumber = [10,20,5,25,50,30,60,55,80,70,75];

const min = Math.min(10,20,5,25,50,30,60,55,80,70,75);
console.log(min);

function lowest (numbers){
    let min = numbers[0];
    for (const num of numbers){
        if (num < min){
            min = num;
        }
    }
    return min;
}
const minNumbers = [10,20,5,25,50,30,60,55,80,70,75];
const lower = lowest(minNumbers)
console.log(lower);