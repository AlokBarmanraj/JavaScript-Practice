const productsList = [
    {name : "Shirt", price : 700},
    {name : 'Pant', price : 900},
    {name : 'shoe', price : 700}
];

function totalProductPrice (products){
    let sum = 0;
    for(const product of products){
        sum = product.price + sum;
    }
    return sum;
}
const total = totalProductPrice(productsList);
console.log(total);