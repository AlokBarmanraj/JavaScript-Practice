const numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers);

const reverse =numbers.reverse();
console.log(reverse);


const number = [10,20,30,40,50,60,70,80,90];

const rev_number =[];

for(const num of number){
    console.log(num);
    rev_number.unshift(num);
}
console.log(rev_number);


const reverse_number =[];
for(let i = 0; i < number.length; i++){
    const num = number[i];
    reverse_number.unshift(num);
}
console.log(reverse_number);

// reverse side 
const rev_rev_number = [];
for(let i = number.length -1 ; i >= 0; i--){
    const num = number[i];
    console.log(num);
    rev_rev_number.push(num);
}
console.log(rev_rev_number);