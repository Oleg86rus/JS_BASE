/*
Необходимо посчитать сумму кубов всех чисел в массиве. Например, для массива [1, 5, 9] должен быть следующий результат:
1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

Решите данную задачу 4-мя способами:

Через цикл for
Через цикл for of
Через метод forEach
Через метод reduce
Для данного массива numbers сумма кубов должна равняться 1158411.
 */

const numbers = [10, 4, 100, -5, 54, 2];
console.log('Исходный массив: ', numbers)
let acrossFor = 0;
let acrossForOf = 0;
let acrossForEach = 0;
let acrossReduce = 0;
const numbersInCube = numbers.map((number) => {
    return number ** 3;
});
console.log('Числа в кубе: ', numbersInCube);
//1
for (let i = 0; i < numbersInCube.length; i++) {
    acrossFor += numbersInCube[i];
}
alert(`1.Через цикл for = ${acrossFor}.`);
console.log(`1.Через цикл for = ${acrossFor}.`);
//2
for (const number of numbersInCube) {
    acrossForOf += number;
}
alert(`2.Через цикл for of = ${acrossForOf}.`);
console.log(`2.Через цикл for of = ${acrossForOf}.`);
//3
numbersInCube.forEach((number) => {
    acrossForEach += number;
})
alert(`3.Через метод forEach = ${acrossForEach}.`);
console.log(`3.Через метод forEach = ${acrossForEach}.`);
//4
acrossReduce = numbersInCube.reduce((acc, number) => {
    return acc + number;
}, 0);
alert(`4.Через метод reduce = ${acrossReduce}.`);
console.log(`4.Через метод reduce = ${acrossReduce}.`);