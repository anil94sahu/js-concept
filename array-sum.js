function arraySum(arr){
    let tempArray = arr.sort((a,b) => a-b);
    let largest = tempArray.pop();
    let sum = 0;
    tempArray.forEach(e => sum += e);
    return largest == sum;
}

console.log(arraySum([1,2,3,4,5,15]));