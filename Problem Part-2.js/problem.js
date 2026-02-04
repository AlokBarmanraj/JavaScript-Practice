// Task -1
const heights = [167, 190, 120, 165, 137];
function isMinNumber (numbers){
    let min = numbers[0];
    for (const number of numbers){
        // console.log(number);
        if (number < min){
            min = number
        }
    }
    return min;
}
const minNumber = isMinNumber(heights);
console.log(minNumber);


// Task -2
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function isMinName (Names){
    let min = Names[0];
    for (const name of Names){
        if (name.length < min.length){
            min = name;
        }
    }
    return min;
}
const minName = isMinName (heights2);
console.log(minName);



// Task -3
const laptop = 35000;
const tablet = 15000;
const mobile = 20000;

function calculateElectronicsBudget (a,b,c){
    const totalBudget = (a * laptop) + (b * tablet) + (c * mobile);
    return totalBudget;
}
const productQuantity = calculateElectronicsBudget (5, 2, 1);
console.log(productQuantity);



// Task - 4
    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

    function findAveragePhonePrice(products){
        let sum = 0;
        for ( const product of products){
                sum = product.price + sum;
        }
        return sum ;
    }
    const totalPrice =findAveragePhonePrice(phones);
    console.log(totalPrice);

