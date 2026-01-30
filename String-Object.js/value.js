const car ={
    brand : 'BMW',
    color : 'black',
    isNew : true,
    silender : 4,
    'fav model':['X1 SUV','X2 SUV','X3 SUV','X4 SUV']
}
console.log(car);

car.color = 'White';
car['brand'] = 'Xiaomi';

const newCar = 'silender';
car[newCar] = 5;
console.log(car);