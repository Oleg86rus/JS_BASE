/*
Имба версия задачи:
1. Строка состоит из маленьких/больших русских букв и цифр в перемешку, запросил через промпт
2. Если встречаем маленькую русскую букву - оставляем на месте ее
3. Если большую - меняем местами относительно центра алфавита на маленькую ("А" станет "я", а "Я" станет "а", б -> Ю и тд)
4. Как только встретили цифру, если цифра меньше 10 - то мы берем следующую букву за ней и откидываемся назад на 10 позиций, при чем, при переходе через а, дальше идут большие буквы, например
9ж  -> ЮЯабвгдеёж
Если больше или равно 10, максимально возможное 999, то добавляем за буквой, идущей после цифры нужное кол-во символов пользуясь той же логикой
100а -> аб...яА....Яа... в таком формате
Если цифра последняя, то мы берём последнюю букву итоговой строки и работаем по алгоритму - добавить в конец итоговой строки число символов от этой буквы и дальше)
5. Дальше запрашиваю еще одно число через промпт, какой длины подстроки буду искать, отдельно для верхнего и нижнего регистра
 например цифра 4 для верхнего и 4 для нижнего
 мне надо посчитать сколько подстрок будет маленьких букв и сколько подстрок больших букв будет этой длины, при чем, обязательно должны идти по алфавиту подстроки
 абвгггггдеёАААААААААААГДЕЁ   ->
маленькие абвг, гдеё ->2
большие ГДЕЁ -> 1

Вывод в консоль:
Введенная строка: *****
Измененная строка: *****
Количество подстрок с * подряд идущими символами в нижнем регистре:  *
Количество подстрок с * подряд идущими символами в верхнем регистре:  *
 */

let receivedString = prompt('Введите строку из строчных и прописных русских букв вперемешку');

const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
const alphabetStr = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let resultString = '';
let resultStringRepeat = '';
let i = 0;
let symbol = '';
let numberToLetter = alphabet + alphabetStr;
let number = 0;
let letterAfterNumber = '';
let letterToSliceFirstIndex = 0;
let letterToSliceSecondIndex = 0;
while (i < receivedString.length) {
    symbol = receivedString.charAt(i);
    number = Number(symbol);
    letterAfterNumber = receivedString.charAt(i + 1);
    if (symbol === symbol.toUpperCase() && isNaN(symbol)) {
        resultString += alphabet.charAt(alphabet.length - alphabet.indexOf(receivedString.charAt(i)) - 1).toLowerCase();
    } else if (!isNaN(symbol) && isNaN(receivedString.charAt(i + 1))) {
        numberToLetter = numberToLetter.repeat(5);
        letterAfterNumber = receivedString.charAt(i + 1);
        letterToSliceFirstIndex = numberToLetter.indexOf((letterAfterNumber), 2) - number;
        letterToSliceSecondIndex = (letterToSliceFirstIndex + number);
        resultString += numberToLetter.slice(letterToSliceFirstIndex, letterToSliceSecondIndex);
    } else if (!isNaN(symbol) && receivedString.charAt(i + 1) == '' && isNaN(receivedString.charAt(i - 1))) {
        numberToLetter = numberToLetter.repeat(5);
        letterAfterNumber = receivedString.charAt(i - 1);
        letterToSliceFirstIndex = numberToLetter.indexOf((letterAfterNumber), 2);
        letterToSliceSecondIndex = (letterToSliceFirstIndex + number);
        resultString += numberToLetter.slice(letterToSliceFirstIndex, letterToSliceSecondIndex);
        break;
    } else if (!isNaN(symbol) && !isNaN(receivedString.charAt(i + 1)) && isNaN(receivedString.charAt(i + 2)) && receivedString.charAt(i + 2) !== '') {
        number = Number(symbol + receivedString.charAt(i + 1));
        numberToLetter = numberToLetter.repeat(5);
        letterAfterNumber = receivedString.charAt(i + 2);
        letterToSliceFirstIndex = numberToLetter.indexOf(letterAfterNumber) + 1;
        letterToSliceSecondIndex = letterToSliceFirstIndex + number;
        resultString += receivedString.charAt(i + 2) + numberToLetter.slice(letterToSliceFirstIndex, letterToSliceSecondIndex);
    } else if (!isNaN(symbol) && !isNaN(receivedString.charAt(i + 1)) && !isNaN(receivedString.charAt(i + 2)) && isNaN(receivedString.charAt(i + 3)) && receivedString.charAt(i + 3) !== '') {
        number = Number(symbol + receivedString.charAt(i + 1) + receivedString.charAt(i + 2));
        numberToLetter = numberToLetter.repeat(50);
        letterAfterNumber = receivedString.charAt(i + 3);
        letterToSliceFirstIndex = numberToLetter.indexOf(letterAfterNumber) + 1;
        letterToSliceSecondIndex = letterToSliceFirstIndex + number;
        resultString += receivedString.charAt(i + 3) + numberToLetter.slice(letterToSliceFirstIndex, letterToSliceSecondIndex);
    } else if (!isNaN(symbol) && !isNaN(receivedString.charAt(i + 1)) && !isNaN(receivedString.charAt(i + 2)) && !isNaN(receivedString.charAt(i + 3)) && receivedString.charAt(i + 3) !== '') {
        alert('Вы ввели число, больше 999');
        break;
    } else  if (!isNaN(receivedString.charAt(i - 1)) && !isNaN(receivedString.charAt(i - 2)) && isNaN(symbol) && receivedString.charAt(i - 1) !== '') {
        resultString += '';
    } else if (isNaN(symbol) && !isNaN(receivedString.charAt(i + 1)) && receivedString.charAt(i + 2) == '' && receivedString.charAt(i + 1) !== ''){
        resultString += '';
    } else {
        resultString += receivedString.charAt(i);
    }
     i++;
}
alert(`Результат алгоритмов: ${resultString}.`);
console.log('Введенная строка: \n', receivedString);
console.log('Измененная строка: \n', resultString);

let enteredNumber = Number(prompt('Введите число, какой длинны подстроки искать для Прописных').trim());
let enteredNumberStr = Number(prompt('Введите число, какой длинны подстроки искать для Строчных').trim());
let numberOfRepeatStr = 0;
let numberOfRepeat = 0;
let symbolRepeated = '';
let symbolRepeatedStr = '';
let ifRepeatedFirstLetter = false;
let ifRepeatedSecondLetter = false;
let ifRepeatedThirdLetter = false;
let ifRepeatedFourthLetter = false;
let symbolFromResult = '';
let ifRepeatedStr = false;
i = 0;
resultStringRepeat = resultString;
while (i < (alphabet.length - enteredNumber)) {
    symbolRepeated = alphabet.slice(i, (i + enteredNumber));

}
/*
С позволения @frontit , я бы сделал так:
1. Запросил N -кол-во символов в проверяемой строке;
2. Далее все проверки и формирования проверяемой строки идут в цикле;
3. На первой итерации формирую первую подстроку для поиска, длиной N из символов, как в задании строго идущих по алфавиту (например, N = 2, stringToFind = 'аб'' или, N = 3 -> 'абв')
4. Проверяем все вхождения полученной полученной подстроки в результирующую строку (которую сформировали в п.1...4). Записываем их себе в какой-нибудь counter
5. Работаем с индексом цикла
6. Повторяем итерацию. Повторяем до тех пор пока не проверим все возможные варианты подстроки из алфавита  длиной N
7. Делаем отдельно для Lowercase и UpperCase
8. Выводим итоговый результат
 */
