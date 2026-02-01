function evenSizeString (str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log('Even size');
        return true;
    }
    else{
        console.log('Odd size');
        return false;
    }
}
console.log(evenSizeString('Dhaka'));
console.log(evenSizeString('Faka'));



// Boolean
function doubleOrTriple (number, double){
    if(double === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}
console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));




// Array 
function numberOfElements (numbers){
    const len = numbers.length;
    return len;
}
console.log(numberOfElements([12, 15, 25, 50, 100]));




// Object 
function getAge (person){
    const age = person.age;
    return age
}
const person={
    name :'Alok',
    age : 22
}
console.log(getAge(person));