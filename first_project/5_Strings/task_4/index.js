/*
Сейчас в коде из задания 3 вам необходимо создать еще одно модальное окно, в котором будет запрашиваться возраст пользователя. Передайте в prompt строку “Сколько вам лет?” и введенный пользователем результат сохраните в переменную userAge. Конечный результат должен удовлетворять следующим условиям:

Значение должно быть преобразовано к типу данных number.
В начале и в конце строки не должно быть лишних пробелов.
После выведите в модальное окно с помощью alert строку “Вас зовут userName и вам userAge лет” (замените userName и userAge на отформатированный текст, введенный пользователем).
 */

const userName = prompt('Как Вас зовут');
let userAge = prompt('Сколько Вам лет?');
userAge = Number(userAge.trim());
alert(`Вас зовут ${userName.trim().toUpperCase()} и Вам ${userAge} лет`);