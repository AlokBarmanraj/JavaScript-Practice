const numbers =[45, 65, 23, 98, 19];
for(let i = 0; i < numbers.length; i++){

    const number = numbers[i];
    console.log(number);
}



// OR 
for (number of numbers){

    console.log(number);
}




const products =[
    {id: 1, name: 'Xiaomi Phone', price: 13000},
    {id: 2, name: 'i Phone', price: 13000},
    {id: 3, name: 'MackBook Air', price: 130000},
    {id: 4, name: 'Xiaomi Phone', price: 13000},
    {id: 5, name: 'Xiaomi Phone', price: 13000},
    {id: 6, name: 'Xiaomi Phone', price: 13000},
    {id: 7, name: 'Xiaomi Phone', price: 13000},
    {id: 8, name: 'Xiaomi Phone', price: 13000},
    {id: 9, name: 'Xiaomi Phone', price: 13000},
    {id: 10, name: 'Xiaomi Phone', price: 13000},
    {id: 11, name: 'Xiaomi Phone', price: 13000},
    {id: 12, name: 'Xiaomi Phone', price: 13000},
    {id: 13, name: 'Xiaomi Phone', price: 13000},
    {id: 14, name: 'Xiaomi Phone', price: 13000},
    {id: 15, name: 'Xiaomi Phone', price: 13000},
    {id: 16, name: 'Xiaomi Phone', price: 13000},
    {id: 17, name: 'Xiaomi Phone', price: 13000},
];
// for(const product of products){
//     console.log(product);
// }


function matchedProducts (products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result =matchedProducts(products, 'phone');
console.log(result);
