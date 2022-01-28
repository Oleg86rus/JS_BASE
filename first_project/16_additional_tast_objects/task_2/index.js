/*
В игре есть 2 игрока: герой и враг. Они будут драться друг с другом. У каждого игрока есть шкала здоровья, которая изначально равна 100. При каждом ударе у противоположного игрока отнимается по 10 единиц здоровья. Побеждает тот, у кого здоровье осталось больше 0.

Сейчас вам необходимо создать функцию startGame, которая будет принимать в себя 2 параметра:

heroPlayer. Объект игрока, который содержит свойства name - имя героя; health - шкала здоровья, которая изначально равна 100; heatEnemy - функция, которая принимает в себя объект enemy и отнимает у объекта enemy 10 единиц здоровья (ключ health)
enemyPlayer. Объект врага, который содержит свойства name - имя героя; health - шкала здоровья, которая изначально равна 100; heatHero - функция, которая принимает в себя объект hero и отнимает у объекта hero 10 единиц здоровья (ключ health)
Внутри функции startGame вам необходимо случайным образом генерировать число от 0 до 1. Если выпадает 0, то нужно вызвать метод heatEnemy у объекта heroPlayer, если 1 - то heatHero у enemyPlayer

Для того, чтобы функция генерировала несколько раз случайные значения и игроки дрались, пока у кого-то не закончатся жизни, рекомендуется использовать цикл while, который будет выполнятся, пока у любого игрока свойство health не станет меньше либо равно нулю.

После выполнения цикла необходимо определить, какой игрок выиграл, и вывести сообщение через,где name и health - значения свойств победившего игрока.
 */
let randomNumber = 0;
let vinner;
function getRandomNumberInRange() {
    return Math.floor(Math.random() * (1 - 0 + 1)) + 0;
}
const heatHealth = (obj) => {
    obj.health -= 10;
};
const hero = {
    name: 'Batman',
    health: 100,
};
const enemy = {
    name: 'Joker',
    health: 100,
};
const startGame = (heroPlayer, enemyPlayer) => {
    while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
        randomNumber = getRandomNumberInRange();
        console.log('Выпал: ', randomNumber);
        if (getRandomNumberInRange() === 1) {
            heatHealth(enemyPlayer);
            console.log('У игрока enemyPlayer осталось жизней: ', enemyPlayer.health);
        } else {
            heatHealth(heroPlayer);
            console.log('У игрока heroPlayer осталось жизней: ', heroPlayer.health);
        }
    } console.log('Жизни heroPlayer: ', heroPlayer.health, '\nЖизни enemyPlayer: ', enemyPlayer.health);

    if (enemyPlayer.health !== 0) {
        vinner = enemyPlayer;
    } else {
        vinner = heroPlayer;
    }
    alert(`${vinner.name} победил! У него осталось ${vinner.health} здоровья`);
    return vinner.name;
};
startGame(hero, enemy);