function testRepeat(arr){
    let max = 1;
    let position = 1;
    let value = -1;
    let tempNumbers = arr.reduce((acc,curr,index) => {
        acc[curr] = acc[curr] ? {...acc[curr], amount: acc[curr]['amount'] + 1}: {amount:1, index};
        let amount = acc[curr]['amount'];
        let place = acc[curr].index;
        if(amount > max || (amount  == max && place <= position && amount > 1)) {
            max = amount;
            position = place;
            value = curr
        }
        return acc;
    },{});
    return value;
}

console.log(testRepeat([2,5,2,1,5]));
console.log(testRepeat([6,5,5,10,10,10]));
console.log(testRepeat([3,4,1,6,10]));
