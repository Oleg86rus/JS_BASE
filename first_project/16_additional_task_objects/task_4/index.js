/*
Вам необходимо создать функцию getWinner, которая принимает в себя 2 параметра:

applicants. Объект, в котором ключи - это номерки людей, по которым будет производится случайный отбор, а значения - это объекты кандидатов на выигрыш в лотерее
winnerObject. Это объект, в котором хранится всего 1 ключ prize, хранящий значения размера выигрыша в лотерее
Вам необходимо случайным образом выбрать победный номерок (случайный ключ в объекте applicants) и вернуть из функции getWinner объект, в котором будут хранится свойства из winnerObject и объект победителя.


 */

const todaysWinner = {
    prize: '10 000$',
};
const winnerApplicants = {
    '001': {
        name: 'Максим',
        age: 25,
    },
    '201': {
        name: 'Светлана',
        age: 20,
    },
    '304': {
        name: 'Екатерина',
        age: 35,
    },
};
let randomNumber = 0;
const getRandomNumberInRange = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min;
};
let applicants = Object.entries(winnerApplicants)
const getWinner = (applecants, winnerObject) => {
    console.log(Object.keys(applecants));
    const transformationArrInArrOfNumbers = Object.keys(applecants).map((item) => {
        return parseFloat(item);
    })
    console.log(transformationArrInArrOfNumbers);
    transformationArrInArrOfNumbers.sort((a, b) => {
        return a - b;
    })
    console.log(transformationArrInArrOfNumbers);
    console.log(transformationArrInArrOfNumbers[transformationArrInArrOfNumbers.length - 1])
    while (!transformationArrInArrOfNumbers.find(item => item === randomNumber)) {
        randomNumber = getRandomNumberInRange(transformationArrInArrOfNumbers[0], transformationArrInArrOfNumbers[transformationArrInArrOfNumbers.length - 1]);
    } console.log('Число совпало: ', randomNumber);
    console.log(applicants);
    let winner = applicants.find(obj => obj[0] == randomNumber);
    console.log(winner[1]);
    console.log(`Победитель данного раунда лотереи:\nИмя: ${winner[1].name}\nВозраст: ${winner[1].age}\nСумма выигрыша: ${winnerObject.prize}`);
};
const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner);
// { prize: '10 000$', name: 'Максим', age: 25 }