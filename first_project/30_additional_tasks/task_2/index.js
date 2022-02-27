/*
Напишите функцию, которая принимает в аргументах 2 строки. Она должна возвращать true если эти строки состоят из одинаковых букв и false если нет

console.log(isEqualSymbols('адрес', 'среда')) // true
console.log(isEqualSymbols('ноутбук', 'программист')) // false

function isEqualSymbols(str1, str2) {
   // Your code here ...
}
 */

function isEqualSymbols (str1, str2) {
    let checkLength = true;
    let checkLetters = true;
    const strArr = str1.split('');
    strArr.forEach((letter) => {
        if (str2.indexOf(letter) === -1) {
            checkLetters = false;
        }
    })
    return checkLength && checkLetters;
}
console.log(isEqualSymbols('адрес', 'среда')) // true
console.log(isEqualSymbols('ноутбук', 'программист')) // false
console.log(isEqualSymbols('fvn', 'nfvfff')) // true