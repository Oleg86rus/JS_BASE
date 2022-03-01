/*
Задание с собеседования!

Напишите функцию, которая будет принимать в себя массив целых чисел и возвращать новый массив, состоящий только их уникальных элементов переданного массива

unique([1, 1, 2, 2, 4, 2, 3, 7, 3]) // => [1, 2, 4, 3, 7]
 */

const someOfNumbers = [1, 1, 2, 2, 4, 2, 3, 7, 3];
const getUniqueNumber = (arr) => Array.from(new Set(arr));

console.log(getUniqueNumber(someOfNumbers));