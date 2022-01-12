/*
Вы когда нибудь проходили тесты? Думаю ваш ответ - да, так как они повсюду. Сейчас почти все тесты были перенесены в онлайн формат и размещаются на веб-сайтах, которые разрабатывают веб-разработчики. Сейчас вы создадите небольшой тест по математике для учеников начальных классов.

В тесте всего 5 вопросов:

Сколько будет 2 + 2?
Сколько будет 2 * 2?
У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?
У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?
Сколько будет 2 + 2 * 2?
Вам необходимо помочь ученикам начальных классов, поэтому сделаем для них тест, который проверит их знания математики.

Каждый вопрос и заранее подготовленный правильный ответ (ответы должны быть типом данных number) сохраняйте в переменные. Вопросы выводите с помощью функции prompt и также сохраняйте значение введенные пользователем в отдельные переменные.

Если ответ был дан правильно, то отобразите сообщение “Ответ Верный” при помощи alert, иначе - “Ответ Неверный”. Если даже ответ был дан неправильно, то пользователь все равно должен быть перенаправлен на следующий вопрос.

Также вам необходимо вести счет правильных и неправильных ответов. Сохраняйте эти данные в переменные correctAnswers и incorrectAnswers соответственно. После выполнения теста с помощью alert выведите сообщение “Конец теста! Правильные ответы - correctAnswers; Неправильные ответы - incorrectAnswers.” (замените correctAnswers и incorrectAnswers на итоговые значения).

Примечание: учтите, что prompt возвращает тип данных string, а значения, которые должны хранится в переменных с ответами - это тип данных number.
 */
const firstAnswer = 4;
const secondAnswer = 4;
const thirdAnswer = 1;
const fourthAnswer = 12;
const fifthAnswer = 6;
let correctAnswers = 0;
let incorrectAnswers = 0;

const firstQestion = Number(prompt('Сколько будет 2 + 2?').trim());
if (firstQestion === firstAnswer) {
    alert('Ответ Верный');
    correctAnswers += 1;
} else {
    alert('Ответ Неверный');
    incorrectAnswers += 1;
}

const secondQestion = Number(prompt('Сколько будет 2 * 2?').trim());
if (secondQestion === secondAnswer) {
    alert('Ответ Верный');
    correctAnswers += 1;
} else {
    alert('Ответ Неверный');
    incorrectAnswers += 1;
}

const thirdQestion = Number(prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?').trim());
if (thirdQestion === thirdAnswer) {
    alert('Ответ Верный');
    correctAnswers += 1;
} else {
    alert('Ответ Неверный');
    incorrectAnswers += 1;
}

const fourthQestion = Number(prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?').trim());
if (fourthQestion === fourthAnswer) {
    alert('Ответ Верный');
    correctAnswers += 1;
} else {
    alert('Ответ Неверный');
    incorrectAnswers += 1;
}

const fifthQestion = Number(prompt('Сколько будет 2 + 2 * 2?').trim());
if (fifthQestion === fifthAnswer) {
    alert('Ответ Верный');
    correctAnswers += 1;
} else {
    alert('Ответ Неверный');
    incorrectAnswers += 1;
}
alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);