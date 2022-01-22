/*
Для начала создадим 2 функции. Они будут нашими будущими колбеками:

showSuccessMessage - принимает в себя параметр message и выводит его в консоль через console.log
showErrorMessage - принимает в себя параметр message и выводит его в консоль через console.error (console.error тоже выводит сообщение в консоль, но красным цветом).


Далее необходимо создать еще одну функцию под названием checkTextOnErrorSymbol. С помощью нее мы будем искать в тексте запрещенный символ и выводить ошибку в консоль, если такой символ был найден.

checkTextOnErrorSymbol принимает в себя 4 параметра**:**

text, тип данных string. Отвечает за текст, в котором мы будем искать запрещенный символ
errorSymbol, тип данных string. Это запрещенный символ, который мы будем искать
successCallback - функция, которая будет выводить успешное сообщение, если запрещенных символов не было найдено
errorCallback - функция, которая будет выводить ошибку в консоль, если был найден запрещенный символ
Если запрещенный символ был найден, то вызовите колбэк errorCallback и передайте в него сообщение “Найден запрещенный символ "${errorSymbol}" под индексом ${i}.” (замените errorSymbol на запрещенный символ, i - на индекс строки, в котором был обнаружен запрещенный символ.

Если ни одного запрещенного символа в строке не было найдено, то вызовите колбэк successCallback и передайте в него сообщение “В данном тексте нет запрещенных символов”.
 */
const text = 'Привет! Как дела! Давно мы с тобой не виделись.';
const showSuccessMessage = (message) => {
    console.log(message);
};
const showErrorMessage = (message) => {
    console.error(message);
};
let findError = false;
const textForCheck = prompt('Введите текст для проверки').trim();
const bannedSymbol = prompt('Введите запрещенный символ').trim();
const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
for (let i = 0; i < text.length; i++) {
    if (text[i] === errorSymbol) {
        findError = true;
        errorCallback(`Найдем запрещенный символ ${errorSymbol}, под индексом ${i}`);
    }
}
if (findError === false) {
    successCallback('В данном тексте нет запрещенных символов');
}
}
checkTextOnErrorSymbol(textForCheck, bannedSymbol, showSuccessMessage, showErrorMessage);