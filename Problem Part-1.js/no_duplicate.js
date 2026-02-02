function noDuplicate(arr){
    const unique = [];
    for( const item of arr){
        if ( unique.includes(item)===false){
            unique.push(item);
        }
    }
    return unique;
}
const names = ['abul', 'kabul', 'abul','jabul', 'kabul', 'mabul']
const noDupli = noDuplicate(names)
console.log(noDupli);