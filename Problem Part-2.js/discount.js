/**
 * Ticket = 100 price --> 100 taka
 * More Than Ticket = 101 - 200 Discount price --> 90taka
 * More than ticket = 200 Discount Price --> 70taka
 */

function ticketDiscountPrice (quantity){
    if (quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if (quantity <= 90){
        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity * 70;
        return total;
    }
}
const ticketQuantity = ticketDiscountPrice(10);
console.log(ticketQuantity);