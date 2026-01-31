const person =['abul','kabul', 'jabul', 'Mabul', 'Asadul'];
console.log(person);

const sorted_person = person.sort();
console.log(sorted_person);

// sort ---> small to larger
/**
 // const number = [2,5,4,3,7,9,8,6,1]
 * Ascending---> smaller to larger [1,2,3,4,5,6,7,8,9]
 * Descending---> larger to smaller [9,8,7,6,5,4,3,2,1]
 */
const number = [2,5,4,3,7,9,8,6,1];
const sort_number_asc = number.sort();
console.log(sort_number_asc);



const numbers = [2,5,4,3,7,9,8,6,1, 15, 20, 13, 19,35,45];
// const sort_numbers_asc = numbers.sort(); not working
const sort_numbers_asc = [...numbers].sort(function(a,b){return a-b});
console.log(sort_numbers_asc);
const sort_numbers_dsc = [...numbers].sort(function(a,b){return b-a});
console.log(sort_numbers_dsc);