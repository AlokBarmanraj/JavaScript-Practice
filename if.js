
// Condition 


// 1 task 
var burgerPrice = 600 ;
if (burgerPrice > 500){
    console.log('free coke');
}
else{
    console.log("or extra 30 taka pay");
}



// 2 task 
var BMI = 30;
if(BMI < 18.5){
    console.log(' you are underweight');
}
else if(BMI >= 18.5 && BMI <=24.9){
    console.log('you are normal');
}
else if (BMI >=25 && BMI <= 29.9){
    console.log('you are overweight');
}
else {
    console.log('Otherwise, you are obese');
}



// 3 task 
var totalScoire = 60;
if (totalScoire>=90 && totalScoire<=100){
    console.log('A');
}
else if (totalScoire>=80 && totalScoire<=89){
    console.log('B');
}
else if(totalScoire>=70 && totalScoire<=79){
    console.log('C');
}
else if(totalScoire>=60 && totalScoire<=69){
    console.log('D');
}
else if(totalScoire>=0 && totalScoire<=59){
    console.log('F');
}
else{
    console.log('Do not go to School');
}



// 4 task 
var myScore = 85;
var friendScore = 50;
if(myScore> 80){
    if(friendScore>=80){
        console.log('go for a lunch');
    }
    else if(friendScore>=60 && friendScore<80){
        console.log('good luck next time');
    }
    else if(friendScore>=40 && friendScore<60){
        console.log("keep your friend's message unseen");
    }
    else{
        console.log('block your friend');
    }
}
else{
    console.log('go to home for sad song');
}



// 5 task 
var num1 = 12;
var num2 = 24;
var result;
if(num1>num2){
    num1 * 2;
}
else{
    result=num1+num2;
}
console.log(result);


result= num1>num2 ? num1*2 :num1+num2
console.log(result);



// 6 task
var ticketPrice = 800;
var isStudent = true
var age =9;
if(age<10){
    console.log('free dinner');
}
else if (age>=60){
    console.log(ticketPrice * .85);
}
else if(isStudent){
    console.log(ticketPrice*0.5);
}
else{
    console.log('fullpay 800 taka');
}
