const school = 'Rajshahi govt city college'
// console.log(school);


const subject = 'Bangla';
const book = 'bangla';

console.log(book.toLowerCase());
console.log(book.toUpperCase());

//! ==>subject and book same na because book value bangla first latter small latter <==

// if(subject===book){
//     console.log('i am go to school');
// }
// else{
//     console.log('i am not go to school');
// }


// ===>same valu na hola (. to lowercase() )use korta hoba)<===
if(subject.toLowerCase()===book.toLowerCase()){
    console.log('i am go to school');
}
else{
    console.log('i am not go to school');
}




const drink = ' water'
const liquid = 'water'


//! ==> drink and liquid same na because liquid value first space second water<==
// if(drink===liquid){
//     console.log('i am drink some Water');
// }
// else{
//     console.log('i am not drink water ');
// }

// ===>same valu na hola (. to lowercase() and .trim() )use korta hoba)<===
if(drink.toLowerCase().trim()===liquid.toLowerCase().trim()){
    console.log('i am drink some Water');
}
else{
    console.log('i am not drinking water ');
}