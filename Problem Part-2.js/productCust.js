const productsList = [
    {name : "Shirt", price : 700, quantity : 1},
    {name : 'Pant', price : 900, quantity : 2},
    {name : 'shoe', price : 700, quantity : 1},
    {name : 'Shampoo', price : 50, quantity : 5},
    {name : 'Oil', price : 300, quantity : 3}
]; 

function totalProductsList (products){
    let sum = 0;
    for (const product of products){
        const totalProductsCost = product.price * product.quantity;
        sum = sum + totalProductsCost;
    }
    return sum;
}
const total = totalProductsList(productsList);
console.log(total);
 


