/*
Вам необходимо создать функцию getSumOfSequence, которая будет создавать массив из чисел и высчитывать сумму первого и последнего элементов массива.

Функция принимает в себя один параметр number. Используя этот параметр, нужно создать массив из чисел от 1 до number. Для заполнения массива элементами используйте цикл for. (Например, если был передан number равный 5, то массив должен выглядеть следующим образом: [1, 2, 3, 4, 5])

Функция getSumOfSequence должна возвращать сумму первого и последнего элементов итогового массива.
 */

let numbersArray = [];
let sumNumbersArray = 0;
let number = Number(prompt('Введите число для массива').trim());
const getSumOfSequence = (number) => {
    for (let i = 1; i <= number; i++) {
        numbersArray.push(i);
    }
    console.log(`Массив: `, numbersArray);
    sumNumbersArray = numbersArray[0] + numbersArray[numbersArray.length - 1];
    alert(`Сумма первого и последнего числа массива = ${sumNumbersArray}`);
    console.log(`Сумма первого и последнего числа массива = ${sumNumbersArray}`);
};
getSumOfSequence(number);
