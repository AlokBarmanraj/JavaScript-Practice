const school ={
    name : 'Rajshahi school',
    class : [1,2,3,4,5,],
    event :['book fair', '21 feb', '16 dec'],
    dressColor :{
        shirt : 'white',
        pant : 'black',
        result :{
            gpa : 5,
            marit : 'top'
        }
    }
}
console.log(school);

school.event[0] = '26 march'
school.dressColor.result.marit = 'top no:1';
console.log(school);
console.log(school.dressColor);
console.log(school.dressColor.result);
console.log(school.dressColor.result.marit);
console.log(school);

// delete 
delete school.class
console.log(school);