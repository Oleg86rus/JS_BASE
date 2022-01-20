/*
Параметр question - это вопрос, который будет задаваться пользователю и будет передан, как параметр в функцию prompt.

Параметр correctAnswer - это правильный ответ на вопрос. Вам необходимо получить значение, которое введет пользователь в текстовое поле, и сверить его с параметром correctAnswer. Если пользователь дал верный ответ, то выведите в модальном окне через alert сообщение “Ответ верный”, иначе - “Ответ неверный”.

Также ****в коде нам нужно учесть, если пользователь введет данную строку “яБлОко“, а параметр correctAnswer будет равен “Яблоко”, то ответ всё равно должен быть засчитан как правильный. То есть, ответ не должен зависеть от регистра символов и от количества пробелов в начале и в конце ответа.
 */

const questions = ['Арбуз это фрукт или ягода?', 'Сколько в среднем зубов у взрослого человека?', 'Как называется самая маленькая птица в мире?'];
const correctArswers = ['Ягода', '32', 'Колибри']
let userAnswer = '';
let numberOfCorrectAnswers = 0;
let numberOfIncorrectAnswers = 0;
const checkQuestionAnswer = (question, correctAnswer) => {
    for (let i = 0; i < questions.length; i ++) {
        userAnswer = prompt(`${question[i]}`).trim();
        if (userAnswer.toLowerCase() === correctAnswer[i].toLowerCase()) {
            alert('Ответ верный');
            numberOfCorrectAnswers += 1;
            console.log('Число верных ответов', numberOfCorrectAnswers);
        } else {
            alert('Ответ неверный');
            numberOfIncorrectAnswers += 1;
            console.log('Число неверных ответов', numberOfIncorrectAnswers);
        }
    }
    console.log('Количество верных ответов: ', numberOfCorrectAnswers);
    console.log('Количество неверных ответов: ', numberOfIncorrectAnswers);
}
checkQuestionAnswer(questions, correctArswers);
