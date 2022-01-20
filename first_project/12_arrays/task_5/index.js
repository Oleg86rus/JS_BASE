/*
Для начала вам необходимо создать пустой массив clientsEstimations, в котором будут хранится оценки клиентов кофейни. Также создайте функцию askClientToGiveEstimation, которая должна выводить сообщение “Как вы оцениваете нашу кофейню от 1 до 10?” через prompt. Конечный результат, который введет пользователь, должен быть типом данных number. Если было введено число от 1 до 10, то добавьте эту оценку в массив clientsEstimations, иначе же никаких действий не совершайте.

Для добавления оценок вызовите функцию askClientToGiveEstimation 5 раз. Рекомендуется это сделать через цикл for.

После того, как оценки будут добавлены, вам необходимо посчитать положительные и отрицательных оценки. Положительной оценкой является число больше 5, отрицательной - число, меньшее за 5 либо равное 5. Выведите через alert сообщение “Всего положительных оценок: goodEstimations; Всего отрицательных оценок: notGoodEstimations”, где goodEstimations - количество положительных оценок, а notGoodEstimations - количество отрицательных оценок.

Условия:

В решение должен быть использован метод массивов filter.
 */

let clientEstimations = [];
const askClientToGiveEstimation = () => {
    const estimation = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?').trim());
    const newClientEstimations = clientEstimations.push(estimation);
    console.log('Новая оценка кофейни: ', newClientEstimations);
};

for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation();
}
const goodEstimations = clientEstimations.filter((estimilation) => {
    return estimilation > 5;
});
const notGoodEstimations = clientEstimations.filter((estimilation) => {
    return estimilation <= 5;
});

alert(`Всего положительных оценок: ${goodEstimations.length};\nВсего отрицательных оценок: ${notGoodEstimations.length}.`)
console.log(`Всего положительных оценок: ${goodEstimations.length};\nВсего отрицательных оценок: ${notGoodEstimations.length}.`)