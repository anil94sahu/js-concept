function capitalizeLetter(str) {
    let words = str.split(' ').map(word => {
        let firstLetter = word.slice(0,1);
        let rest = word.slice(1,);
        firstLetter = firstLetter.toUpperCase();
        return `${firstLetter}${rest}`;
    }  )
    return words.join(' ');
}

console.log(capitalizeLetter('i woke up early today'))