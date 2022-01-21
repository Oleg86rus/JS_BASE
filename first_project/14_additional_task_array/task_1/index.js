const goals = [8, 1, 1, 3, 2, -1, 5];
const sortGoals = goals.map((goal) => {
    return goal;
});
console.log('Новый массив: ', sortGoals)
sortGoals.sort((a, b) => {
    return a - b;
});
console.log('Сортированный массив: ', sortGoals)
console.log('Старый массив: ', goals)
//1
console.log(`Самый результативный матч был под номером ${goals.indexOf(sortGoals[sortGoals.length - 1]) + 1}`);
alert(`Самый результативный матч был под номером ${goals.indexOf(sortGoals[sortGoals.length - 1]) + 1}`)
//2
const badGames = [];
goals.forEach((number, index) => {
    if (number === sortGoals[1]) {
        badGames.push(index);
        console.log(badGames);
    }
});
alert(`Самые нерезультативные матчи были под номерами ${badGames}. В каждом из них было забито по ${sortGoals[1]} мячу(а).`);
//3
let summOfGoals = 0;
goals.forEach((goal) => {
   if (goal > 0) {
       summOfGoals +=goal;
   }
});
console.log(summOfGoals);
alert(`Общее количество голов за сезон равно ${summOfGoals}`);
//4
goals.forEach((goal) => {
    if (goal < 0) {
        alert('Были автоматические поражения: да');
        console.log('Были автоматические поражения: да');
    }
});
//5
const numberOfGoals = Math.round(summOfGoals / (goals.length - 1));
alert(`Среднее количество голов за матч равно ${numberOfGoals}`);
console.log(`Среднее количество голов за матч равно ${numberOfGoals}`);
//6
alert(`${goals.slice().sort()}`);