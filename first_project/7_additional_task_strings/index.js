let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'
// длинна строки 278 символов
console.log('Длинна строки: ', javaScriptDescription.length)

// Обрезаем строку пополам
javaScriptDescription = javaScriptDescription.slice(0, javaScriptDescription.length/2);
//выводим в консоль длинну оставшейся части строки
console.log('Длинна оставшейся части строки: ', javaScriptDescription.length)
//заменяем а на А
javaScriptDescription = javaScriptDescription.replaceAll('а', 'А')
javaScriptDescription = javaScriptDescription.replaceAll('a', 'A')
console.log('Заменили а на А: ', javaScriptDescription)
//убираем все пробелы (нашел в гугле, но не понял как происходит работа с регулярными выражениями...
javaScriptDescription = javaScriptDescription.replaceAll(' ', '');
console.log('Убрали пробелы: ', javaScriptDescription)
//дублируем трижды строку
javaScriptDescription = javaScriptDescription.repeat(3);
console.log('Продублировали строку трижды: ', javaScriptDescription)
//выводим символ по середине
console.log('Символ находящийся по середине: ' ,javaScriptDescription[javaScriptDescription.length/2]);
//выводим итоговую строку
console.log('Итоговая строка: ', javaScriptDescription)
