/*
const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');

if (temperatureInCelsius === 0) {
   alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
   alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}

const temperatureInFahrenheit = (temperatureIncelsius) * 9 / 5 + 32;
alert(`%{temperatureInCelsius} градусов по Цельсию - это %{temperatureInFahrenheit} по
Фаренгейту.`);

У Петра возникают следующие ошибки:

Когда он вводит в текстовое поле 0, то у него не отображается сообщение “0 градусов по Цельсию - это температура замерзания воды”
Не отображается сообщение “%{temperatureInCelsius} градусов по Цельсию - это %{temperatureInFahrenheit} по Фаренгейту.”
В сообщении “%{temperatureInCelsius} градусов по Цельсию - это %{temperatureInFahrenheit} по Фаренгейту.” данные из переменных temperatureInCelsius и temperatureInFahrenheit почему-то не подставляются в строку.
Исправьте все ошибки, чтобы программа работала правильно. Также выполните следующие условия: баг должен быть исправлен при помощи console.log либо debugger, в коде должен присутствовать минимум один console.log либо debugger.

 */

const temperatureInCelsius = Number(prompt('Введите температуру в градусах Цельсия'));
console.log(temperatureInCelsius);
if (temperatureInCelsius === 0) {
    alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}

const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
console.log(temperatureInFahrenheit);
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по
Фаренгейту.`);
console.log(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по
// Фаренгейту.`);
