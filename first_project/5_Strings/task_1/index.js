/*
myName - ваше имя
programmingLanguage - язык програмирования
courseCreatorName - создатель данного курса
reasonText - причина, почему вы хотите стать веб-разработчиком
numberOfMonth - количество месяцев, которое вы уделили изучению JavaScript до начала курса
 */

const myName = 'Oleg';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Maxim';
const reasonText = 'нравится видеть результат своей работы, подработки давно подталкивали к этому';
const numberOfMonth = '2 месяца, уделяя очень мало времни, в основном только на выходных, в прошлом году';

const text = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.

Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth}.Я уверен(а), что пройду данный курс до конца!`;
console.log(text);