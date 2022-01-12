/*
Сейчас вы поработаете с новой функцией confirm. Она выводит модальное окно с 2-мя кнопками: “OK” и “Cancel”. Данная функция идеально подходит для того, чтобы задавать вопросы пользователю. Давайте этим и займемся.

Для начала создайте новую папку под названием “confirm”. В эту папке добавьте 2 файла: index.html и index.js. Сделайте базовую разметку HTML и подключите index.js файл в index.html.

Сейчас ваша задача состоит в том, чтобы задавать вопросы с помощью confirm и выводить ответы через alert. То есть сначала идет вопрос, а затем после нажатия одной из кнопок (“OK” либо “Cancel”) выводится ответ.

Синтаксис функции confirm выглядит следующим образом:

confirm('Ваш текст');
Используйте данные вопросы: JavaScript появился в 1995 году? Спецификация JavaScript называется ECMAScript? JavaScript был создан за 1 месяц?

В случае, если ответ на вопрос утвердителен, то выводите в alert строку “Верно”, иначе выведите правильный ответ.

Откройте index.html файл в браузере и посмотрите на ваш результат.
 */

const firstQestionresult = confirm('JavaScript появился в 1995 году?');
if (firstQestionresult === true) {
    alert('Верно');
} else alert('JavaScript появился в 1995 году');

const secondQestionresult = confirm('Спецификация JavaScript называется ECMAScript?');
if (secondQestionresult === true) {
    alert('Верно');
} else alert('Спецификация JavaScript называется ECMAScript');

const thirdQestionresult = confirm('Спецификация JavaScript называется ECMAScript?');
if (thirdQestionresult === false) {
    alert('Верно');
} else alert('Спецификация JavaScript называется ECMAScript');