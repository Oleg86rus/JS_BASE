/*
getSumOfNumbers принимает в себя 2 параметра: number и type.

Параметр number - это число, до которого будет считаться сумма. То есть, если было передано число 10, то функция должна посчитать сумму от 0 до 10 (0 + 1 + 2 + … + 10).

Параметр type отвечает за выбор чисел для подсчета суммы. Он может быть 3-мя значениями: “odd”, “even” и “”. Если type равняется “odd”, то в сумму должны входить только нечетные числа, “even” - четные числа, пустая строка “” - все числа. По умолчанию параметр type должен быть равен odd.

Функция getSumOfNumbers должна возвращать итоговую сумму с помощью return.

Возможные результаты функции getSumOfNumbers:

number = 10, type = ‘odd’. Возвращает 25.
number = 10, type = ‘even’. Возвращает 30.
number = 10, type = ‘’. Возвращает 55.
 */


let summ = 0;
const numberForFunction = Number(prompt('Введите число').trim());
const typeForFunction = prompt('Введите тип. odd - сумма нечетных, even - сумма четных, "" - сумма всех чисел');
const getSumOfNumbers = (number, type) => {
    for (let i = 0; i <= number; i++) {
        if (type === 'odd' && (i % 2) !== 0) {
            summ += i;
            console.log('нечетное число');
        } else if (type === 'even' && (i % 2) === 0) {
            summ += i;
            console.log('четное число');
        } else if (type === ''){
            summ += i;
            console.log('все числа');
        } else {
            alert('Введенный тип должен быть odd, even или пустая строка');
            break;
        }
        console.log(summ);
    }
    return summ;
}

console.log(getSumOfNumbers(numberForFunction, typeForFunction));
