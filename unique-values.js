function unique(str){
    let values = [];
    for (let letter of str){
        if(values.indexOf(letter) !== -1){return false}
        else values = [...values, letter];
        
    }
    console.log(values.join(''));
    return true;
}
console.log(unique("abcde"));
