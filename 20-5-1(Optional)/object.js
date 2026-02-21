const nayok ={
    name: 'Sakib khan',
    id: 121,
    address: 'NImpur Jhautola',
    isSingle: true,
    friends:['Apu', 'Tapu', 'Kapu', 'japhu'],
    movies:[{name: 'NO-1', year: 2014 }],
    act: function(){
        console.log('Best of luck')
    },
    car: {
        brand: 'Tesla',
        price: 50000000,
        made: 2024,
        manufacturer: {
            name:'BMW',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}
console.log(nayok);
console.log(nayok.act);
nayok.act();