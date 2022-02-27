/*
Задание с собеседования!

Напишите функцию, которая будет принимать в себя массив целых чисел и возвращать новый массив, состоящий только их уникальных элементов переданного массива

unique([1, 1, 2, 2, 4, 2, 3, 7, 3]) // => [1, 2, 4, 3, 7]
 */

const someOfNumbers = [1, 1, 2, 2, 4, 2, 3, 7, 3];
const getUniqueNumber = (arr) => {
    const uniqueNumbers = [];
    arr.forEach((el) => {
        if (!uniqueNumbers.includes(el)) {
            uniqueNumbers.push(el);
        }
    })
    return uniqueNumbers;
}
console.log(getUniqueNumber(someOfNumbers));