// Odd 
for(let a = 0; a<= 10; a++){
    if(a%2===1){
        console.log(a);
    }
}

for(let b = 0; b<= 10; b++){
    if(b%2 !==0){
        console.log(b);
    }
}


// give me division 1 to 30 (5/5=25)
for(let c = 1; c<= 30; c++){
    if(c % 5 === 0){
        console.log(c);
    }
}


// give me division 1 to 30 (5/5=25) or (3/5=15)
for(let c = 1; c<= 30; c++){
    if(c % 3 === 0 || c % 5 === 0){
        console.log(c);
    }
}
// give me division 1 to 30 (5/6=30) && (3/5=15)
for(let c = 1; c<= 30; c++){
    if(c % 3 === 0 && c % 5 === 0){
        console.log(c);
    }
}


// give me the sum of numbers from 1 to 20 that are divisible by 3 
let total = 0;
for(let d = 1; d <= 20; d++){
    if(d % 3 === 0){
        console.log(d);
        total = total + d
        console.log('total', total);
    }
} 
console.log('total sum number', total);
