const car ={
    brand : 'BMW',
    color : 'black',
    isNew : true,
    'fav model':['X1 SUV','X2 SUV','X3 SUV','X4 SUV']
}
console.log(car);
console.log(car['fav model']);
// (.)dot notation
console.log(car.brand);
const name = car.brand;
console.log(name);

// ([])bracket notation
console.log(car['color']);
const carColor = car['color'];
console.log(carColor);