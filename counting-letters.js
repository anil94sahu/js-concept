function countingLetters(str){
   
    let tempArr = str.split(' ').map(item => {
       return item.split('').reduce((acc,curr) => {
            acc[curr]  = acc[curr]? acc[curr] + 1: 1;
           if(acc[curr] > acc.max){acc.max = acc[curr]}
           return acc;
        }, {max:1, word: item});
    })
//    console.log(tempArr);
   let amount = 1;
   let word = 1;
   for(let item of tempArr){
       if(item.max > amount){amount = item.max; word = item.word};
    }
           if(amount > 1){
            return word
        } 

  return -1;

}

console.log(countingLetters('javascript is greatestt languageeee for me'))