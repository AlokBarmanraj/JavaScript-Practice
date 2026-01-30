const mobile ={
    brand : 'Samsung',
    price : 25000,
    camera : '15mp',
    color : 'black',
    isNew : true
}

// Array use (for of)
// Object use (for in)
for(const phoneDetails in mobile){
    console.log(phoneDetails);
    console.log(mobile[phoneDetails]);
}

// or system 
const keys = Object.keys(mobile);
console.log(keys);
for(const key of keys){
    // console.log(key);
    console.log( key, ':', mobile[key]);
}
