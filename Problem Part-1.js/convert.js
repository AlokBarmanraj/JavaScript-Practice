function inchToFeet (inch){
    const feet = inch / 12;
    return feet;
}
const tomalHight = inchToFeet(75);
console.log(tomalHight);



// Ignore
 function inchToFeet2 (inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt (feetFraction);
    const inRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inRemaining + ' inch ';
    return result;
 }
 const kamalHight = inchToFeet2(75);
 console.log(kamalHight);
