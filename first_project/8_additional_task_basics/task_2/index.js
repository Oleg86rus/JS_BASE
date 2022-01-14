let clientName = prompt('Введите имя клиента');
let clientSpendToday = Number(prompt('Сколько клиент потратил сегодня?').trim());
let clientSpendForAllTime = Number(prompt('Сколько клиент потратил за все время?').trim());
let discount = 0;

if (isNaN(clientSpendToday) || isNaN(clientSpendForAllTime)) {
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.')
} else {
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
}
clientSpendForAllTime = clientSpendForAllTime + clientSpendToday;

alert(`Вам предоставляется скидка в ${discount}%!`);
alert(`Спасибо, ${clientName}! К оплате ${clientSpendToday}$. За все время в нашем ресторане вы потратили ${clientSpendForAllTime}$.`);