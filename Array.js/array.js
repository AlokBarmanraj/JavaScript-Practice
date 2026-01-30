// Array 


// 1 task 
var fruits =['apple','orange','banana','avocado','jackfruit', ] 
console.log(fruits);
console.log(fruits[3]);
fruits[2]= 'jambura';
console.log(fruits);



// 2 task 
var  touristIspot =['Sundarban','Sajek Valley',"Cox's Bazar"]
console.log(touristIspot);
touristIspot.push ('Sylhet','Bandarban')
console.log(touristIspot);
touristIspot.pop();
console.log(touristIspot);



// 3 task 
var bookName =['bangla','englush','math']
console.log(bookName.includes('javascript'));



// 4 task 
var book =['bangla','math','javascript'];
var desh = 'ba n g la' ; 
var num =20;
console.log(Array.isArray(book));
console.log(Array.isArray(desh));
console.log(Array.isArray(num));



// 5 task 
var number1=[1, 2, 3,]
var number2=[4, 5, 6,]
var conect = number1.concat(number2)
console.log(conect);
var number3= [7, 8, 9]
var add = number1.concat(number2, number3)
console.log(add);