const sentence = 'I am learning web development'
// console.log(sentence);
// for(const latter of sentence){
//     console.log(latter);
// }

// Reverse system 
let reverse ='';
for(const latter of sentence){
    reverse = latter + reverse;
}
console.log(reverse);

// or 
let rev = ''
for(let i = 0; i<sentence.length; i++){
    console.log(sentence[i]);
    const letter = sentence [i];
    rev = letter + rev;
}
console.log(rev);

// shortcut
const reversed = sentence .split('').reverse().join('');
console.log(reversed);