/*
Вам необходимо создать новый массив updatedPrices, который будет содержать те же числа из массива prices, но только увеличенные на 0.5.

После подъема цен вам необходимо уведомить об этом клиентов кофейни, поэтому выведите для каждого типа кофе сообщение через alert “Кофе name сейчас стоит price евро”, где name - название кофе, а price - обновленная цена на кофе.

Условия:

Необходимо использовать методы массивов map и forEach */

const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

const updatePrices = prices.map((price) => {
    return price + 0.5;
})
console.log('Обновленные цены: ', updatePrices);
coffees.forEach((coffee, index) => {
    alert(`Кофе ${coffee} сейчас стоит ${updatePrices[index]} евро`);
    console.log(`Кофе ${coffee} сейчас стоит ${updatePrices[index]} евро`);
})