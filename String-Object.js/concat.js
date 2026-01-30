const first = 'Alok';
const last = 'Barman';

// const fullname = first+last
const fullname = first+ ' ' +last
console.log(fullname);

// or 
const fullname2 = first.concat(' ').concat(last)
console.log(fullname2);


// includes
console.log(first.includes('o'));