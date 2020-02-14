function longestWords(str){
    let words = str.split(" ");
    let longestWord = '';
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word
        }
    }
    return longestWord;
}

console.log(longestWords('This is longestWord of sentence is lambdafunction'));