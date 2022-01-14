let clientName = 'Игорь';
let clientSpendForAllTime = 310;
let discount = 0;
let clientSpendToday = 25;

if (clientSpendForAllTime > 100 && clientSpendForAllTime < 300) {
    discount = 10;
    clientSpendToday = clientSpendToday * (100 - discount) / 100;
} else if (clientSpendForAllTime > 300 && clientSpendForAllTime < 500) {
    discount = 20;
    clientSpendToday = clientSpendToday * (100 - discount) / 100;
} else if (clientSpendForAllTime > 500) {
    discount = 30;
    clientSpendToday = clientSpendToday * (100 - discount) / 100;
}

clientSpendForAllTime = clientSpendForAllTime + clientSpendToday;

alert(`Вам предоставляется скидка в ${discount}%!`);
alert(`Спасибо, ${clientName}! К оплате ${clientSpendToday}$. За все время в нашем ресторане вы потратили ${clientSpendForAllTime}$.`);