/**
 * looping Technique
 * 1. for loop 
 * 2. while loop 
 * 3. do while 
 * 4. for of ---> array loop korar jonno
 * 5. for in ---> object loop korar jonno
 */


const friends =['Elon', 'Bilon', 'Mark', 'Waren']
for(const friend of friends){
    console.log(friend);
}

for(let i = 0; i< friends.length; i++ ){
    // console.log(i);
    console.log(i, friends[i]);
}


const number =[12, 25, 28, 30, 50, 60, 70]

for(let i =0; i<number.length; i++){
    // console.log(i);
    console.log(i, number[i]);
}


let i = 0;
while(i < number.length){
    console.log(i, number[i]);
    i++;
}