function palindrome(str){
    // str = str.toLowerCase();
    str = str.match(/[a-z]/ig).join('').toLowerCase();
    let first = str.split(' ').join('');
    let second = first.split('').reverse().join('');
    return first === second;
}

console.log(palindrome('was it- a car /or a cat I saw'));