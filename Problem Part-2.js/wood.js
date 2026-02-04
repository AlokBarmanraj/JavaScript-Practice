// const perChairWood = 3cfr;
// const perTableWood = 10fr;
// const perBedWood = 50cfr;

function woodQuantity (chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}
const total =woodQuantity(3, 1, 1)
console.log(total);





// const perShirtPrice = 500taka;
// const perPantPrice = 800taka;
// const perShoePrice = 700taka;

function shopIngQuantity (shirtQuantity, pantQuantity, shoeQuantity){
    const perShirtPrice = 500;
    const perPantPrice = 800;
    const perShoePrice = 700;
    
    const totalShirtPrice = shirtQuantity * perShirtPrice;
    const totalPantPrice = pantQuantity * perPantPrice;
    const totalShoePrice = shoeQuantity * perShoePrice;

    const totalShopIngPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
    return totalShopIngPrice;
}
const totalShopIngQuantity = shopIngQuantity(2, 2, 1);
console.log(totalShopIngQuantity);
