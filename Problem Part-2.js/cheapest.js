const mobiles = [
    {name : 'Samsung', price : 20000, camera : '15mp', color : 'Black'},
    {name : 'Xiaomi', price : 25000, camera : '15mp', color : 'Black'},
    {name : 'Oppo', price : 10000, camera : '15mp', color : 'Black'},
    {name : 'I-Phone', price : 120000, camera : '15mp', color : 'Black'},
    {name : 'Walton', price : 5000, camera : '15mp', color : 'Black'}
];

function cheapestPhonePrice (phones){
    let min = phones [0];
    for (const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}
const cheap = cheapestPhonePrice(mobiles);
console.log(cheap);