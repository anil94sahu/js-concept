function mathSequence(arr) {
    let airth = [];
    let geo = [];
    for (let i = 1; i <arr.length;i++) {
        let number1 = arr[i] - arr[i-1];
        if(!airth.includes(number1))airth.push(number1);
        let number2 = arr[i]/arr[i-1];
        if(!geo.includes(number2))geo.push(number2);
    }
    if(airth.length === 1)return 'Airthmetic';
    if(geo.length === 1)return 'Geometric';
    return -1;
}

console.log(mathSequence([1,2,3,4,5,]));
console.log(mathSequence([5,10,20,40,80]));
console.log(mathSequence([1,2,3,30,60]));