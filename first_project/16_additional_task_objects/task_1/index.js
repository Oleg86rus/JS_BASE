/*
Вам необходимо создать функцию getTotalPriceOfShoppingBag, которая будет принимать в себя 1 параметр shoppingBag. shoppingBag - это массив продуктов в корзине, состоящий из объектов, в каждом из которых хранится информация о названии продукта (product) и о количестве продукта в корзине (quantity).
Функция getTotalPriceOfShoppingBag должна возвращать общую стоимость всех товаров в корзине с учетом скидок и с учетом указанных клиентом количеством продуктов. Итоговое значение должно быть округлено до сотых. Это можно сделать с помощью toFixed
 */
const groceries = {
    "Orange Juice": {
        price : 1.5,
        discount: 10,
    },
    "Chocolate": {
        price : 2,
        discount : 0,
    },
    // more items...
}
const shoppingBag = [
    { product: 'Chocolate', quantity: 3 },
    { product: 'Orange Juice', quantity: 23 },
];
const getTotalPriceOfShoppingBag = (shoppingBag) => {
    let fullPrice = 0;
    const groceriesArr = Object.entries(groceries);
    console.log('Преобразовали информацию о каждой единице товара в массив: ', groceriesArr);
    let findFullPriceOfItem = 0;
    shoppingBag.forEach((obj) => {
        console.log('Объект: ', obj);
        const findPriceitem = groceriesArr.find(item => item[0] === obj.product);
        console.log(findPriceitem);
        if (findPriceitem[1].discount !== 0) {
            findFullPriceOfItem = findPriceitem[1].price * (100 - findPriceitem[1].discount) / 100;
            console.log('Со скидкой: ', findFullPriceOfItem);
        } else {
            findFullPriceOfItem = findPriceitem[1].price;
            console.log('Без скидки: ', findFullPriceOfItem);
        }
        fullPrice += obj.quantity * findFullPriceOfItem;
        console.log('Итоговая цена:', fullPrice);
    });
    return fullPrice.toFixed(2);
};

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice); // Возвращает 37.05