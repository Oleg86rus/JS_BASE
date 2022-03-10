let s = 1
console.log(typeof(s))

function reverseString(s) {
    if (typeof(s) !== 'string') {
        console.log('s.split is not a function');
        console.log(s);
    } else {
        const newArr = s.split('').reverse()
        const newString = newArr.join('');
        console.log(newString)
    }
}

reverseString(s)