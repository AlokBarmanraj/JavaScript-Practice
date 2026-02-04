// const mobilePrice = [20000, 10000, 50000, 80000, 30000, 60000, 450000, 701200, 1500, 2100, 600000, 5820000];

function isMin (prices){
    let min = prices [0];
    for (const price of prices){
        if(price < min){
            min = price;
        }
    }
    return min;
}
const mobilePrice = [20000, 10000, 50000, 80000, 30000, 60000, 450000, 701200, 1500, 2100, 600000, 5820000];

const lowPrice = isMin(mobilePrice);
console.log(lowPrice);
