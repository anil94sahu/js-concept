function getUniqueArray(arr){
    let tempArray = arr.map(item => item.company);
    // return [...new Set(tempArray)];
    return arr.reduce((acc,curr) => {
        return acc.add(curr.company)
    }, new Set());
}


let arr = [
    {company: 'cognizant', country: 'US'},
    {company: 'covalense', country: 'New Zealand'},
    {company: 'Zelarsoft', country: 'china'},
    {company: 'cognizant', country: 'India'},
];

console.log(getUniqueArray(arr));