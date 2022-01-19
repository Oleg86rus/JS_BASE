/*
Изначально у вас есть массив coffees, в котором хранятся все виды кофе, которые есть в кофейне у Алексея. Напитки распределены в порядке популярности среди клиентов. Т.е. кофе “Latte” - самый популярный.

const coffees = ['Latte', 'Cappuccino', 'Americano'];
С помощью функции prompt вам необходимо запрашивать название кофе. Передайте в prompt сообщение “Поиск кофе по названию:”. Сохраните значение, которое ввел пользователь в переменную coffeeName.

Если введенное пользователем название кофе существует, то отобразите сообщение с помощью alert “Держите ваш любимый кофе coffee. Он number-й по популярности в нашей кофейне.”, где coffee - название найденного кофе, number - номер найденного кофе в массиве coffees. Если же кофе не был найден, то отобразите сообщение “К сожалению, такого вида кофе нет в наличии”.

Условия:

Название кофе должно быть регистронезависимым. Т.е. если пользователь напечатает “lATte”, то должен показаться результат с кофе “Latte”
Необходимо использовать findIndex.
 */

const coffees = ['Latte', 'Cappuccino', 'Americano'];
let coffeeFind = false;
console.log(coffees)
console.log(coffees[0].toLowerCase())
const coffeName = prompt('Поиск кофе по названию').trim();
const searchCoffeIndex = coffees.findIndex((coffe) => {
    return coffe.toLowerCase() === coffeName.toLowerCase();
});
const searchCoffeName = coffees.find((coffe) => {
    coffeeFind = true;
    return coffe.toLowerCase() === coffeName.toLowerCase();

});
console.log(coffeeFind);
if (coffeeFind === true) {
    alert(`Держите ваш любимый ${searchCoffeName}. Он ${searchCoffeIndex + 1}-й по популярности в нашей кофейне.`);
    console.log(`Держите ваш любимый ${coffees[searchCoffeIndex]}. Он ${searchCoffeIndex + 1}-й по популярности в нашей кофейне.`);
} else {
    alert('К сожалению, такого вида кофе нет в наличии');
    console.log('К сожалению, такого вида кофе нет в наличии');
}