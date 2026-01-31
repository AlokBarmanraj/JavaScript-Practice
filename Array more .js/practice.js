// task->01
const colors = ['red', 'blue', 'green', 'yellow', 'orange']

const rev_color = colors.reverse();
console.log(rev_color);


// task->02
const numbers = [12, 98, 5, 41, 23, 78, 46];

const even_number = []
for(let i =0; i<numbers.length; i++){
    if(numbers[i] % 2 === 0){
        even_number.push(numbers[i])
    }
}
console.log(even_number);


// task-->03
var numbered = ['Tom', 'Tim', 'Tin', 'Tik'];

let result = '';
for( const num of numbered){
    result=result.concat(num);
}
console.log(result);


// task-->04
const statement = 'I am a hard working person';

const results = statement.split(' ').reverse().join(' ');
console.log(results);


// task-->05
const sonka =[1,2,3]
console.log(sonka);
sonka[0]=99;
console.log(sonka);


// task -->06
const students =[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]

for(const student of students){
    const result = student.name + ' score ' + student.marks;
    console.log(result);
}



// task-->07
const val =[
  [1, 2],
  [3, 4],
  [5, 6]
]

console.log(val);

val[1][0]= 99;
console.log(val);