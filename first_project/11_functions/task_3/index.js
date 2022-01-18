/*
Вам необходимо создать функцию getDivisorsCount, которая будет высчитывать количество делителей для переданного числа. Она принимает в себя единственный параметр number. По умолчанию он должен быть равен 1.

Если number меньше нуля либо является не целым (можно проверить при помощи функции Number.isInteger(number)), то выводите в модальное окно при помощи alert сообщение “number должен быть целым числом и больше нуля!”.
 */

number = Number(prompt('Введите целое число, больше нуля').trim());
const getDivisorsCount = (number = 1) => {
    let numberOfDividers = 0;
    let answer = `делителя(ей) (делители - `;
    if (Number.isInteger(number) === false || number < 0) {
        alert(`${number} - число должено быть целым числом и больше нуля!`);
        console.log(`${number} - число должено быть целым числом и больше нуля!`);
    } else {
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                numberOfDividers += 1;
                answer += `${i}, `;
            }
            }
        answer = answer.slice(0, (answer.length - 2));
        answer += `)`;
        }
console.log(`Число ${number} - ${numberOfDividers} ${answer}`);

}
getDivisorsCount(number);