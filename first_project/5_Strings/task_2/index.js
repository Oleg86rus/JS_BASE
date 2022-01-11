/*
C помощью метода replaceAll и toUpperCase вам необходимо изменить в переменной myInfoText все слова “JavaScript” на те же слова, только с прописными буквами (“JAVASCRIPT”). Присвойте переменной myInfoText новое значение с измененными словами “JavaScript”.
Выведите итоговую строку myInfoText в консоль.
Выведите в консоль длину строки myInfoText.
Выведите в консоль первый и последний символы строки myInfoText. Чтобы получить индекс последнего символа, требуется от длины строки вычесть единицу.
 */

const myName = 'Oleg';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Maxim';
const reasonText = 'нравится видеть результат своей работы, подработки давно подталкивали к этому';
const numberOfMonth = '2 месяца, уделяя очень мало времни, в основном только на выходных, в прошлом году';

let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.

Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth}.Я уверен(а), что пройду данный курс до конца!`;

//1
console.log(myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase()));

myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase());

//2
console.log(myInfoText);

//3
console.log(myInfoText.length);

//4
console.log(myInfoText[0]);
console.log(myInfoText[393]);