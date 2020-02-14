function secondValue(arr){
   let tempArr =  [...new Set(arr)].sort((a,b) => a-b);
   if(tempArr.length < 2){
       return `${tempArr[0]}`
   }
   else if(tempArr.length === 2){
       return `${tempArr[0]}${tempArr[1]}`
   }
   else {
    return `${tempArr[1]},  ${tempArr[tempArr.length-2]}`;
   }
}

console.log(secondValue([3,2,88,3,-11,67,71]));