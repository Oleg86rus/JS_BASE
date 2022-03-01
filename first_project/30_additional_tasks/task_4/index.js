/*
Задание с собеседования!

Напишите функцию, которая будет проверять, является ли строка палиндромом

Палиндром — слово, которое одинаково читаеься слева направо и справа налево. Например «топот», «racecar»

isPalindrome('racecar') // true
isPalindrome('programmer') // false
 */



const isPalindrome = (word) => {
    let palindrom = true;
    const wordInArr = word.split('');
    for (let i = 0; i <= wordInArr.length; i++) {
        if (wordInArr[i] !== wordInArr[wordInArr.length - i - 1]) {
            palindrom = false;
        }
    }
    console.log(palindrom)
    return palindrom;
}
isPalindrome('racecar') // true
isPalindrome('programmer') // false
isPalindrome('piqeqip') // false