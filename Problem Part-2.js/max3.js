const jim = 80;
const kim = 85;
const tim = 75;

if (jim > kim && jim > tim){
    console.log('Jim is always boss');
}
else if (kim > jim && kim > tim){
    console.log('Kim is number one boss');
}
else{
    console.log('Tim is ultimate boss');
}



// Just Function Try 
function maxNumber (a, b, c ){
    if (a > b && a > c){
        return a;
    }
    else if (b > a && b > c){
        return b;
    }
    else{
        return c;
    }
}
const max = 50;
const max1 = 70;
const max2 = 60;
const totalMax = maxNumber(max, max1, max2);
console.log(totalMax);