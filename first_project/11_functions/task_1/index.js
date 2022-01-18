/*
Функции необходимо удовлетворять следующим условиям:

В каждую из этих функций должен быть передан 1 параметр name.
Из каждой функции с помощью return должно быть возвращено значение “Имя равно name”, где name - значение переданного в функцию параметра name.
После вам необходимо вызвать каждую функцию и вывести возвращаемое из нее значение в консоль.
 */


function getName1 (name) {
    return `Имя равно ${name}`;
}
const functionDeclaration = getName1('Maxim');
console.log('functionDeclaration: ' , functionDeclaration);

const getName2 = function (name) {
    return `Имя равно ${name}`;
}
console.log('functionExpression: ', getName2('Oleg'));

const getName3 = (name) => {
    return `Имя равно ${name}`;
}
console.log('Стрелочная функция: ', getName3('Andrei'));