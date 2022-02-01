/*
Вам необходимо исправить данный код используя bind, call и apply.

Функцию attack необходимо исправить при помощи bind + нужно вспомнить особенность стрелочных функций (нет своего this)
Функцию score - при помощи call
Функцию substitute - при помощи apply
 */


const footballer = {
    fullName: 'Cristiano Ronaldo',
    attack: function () {
        console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
    },
    scoreGoal(sound) {
        console.log(`${this.fullName} забил гол! Вот это да!`);
        this.celebrate(sound);
    },
    celebrate(sound) {
        console.log(sound);
    },
    goToSubstitution: function(newPlayer) {
        console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
    }
};

const attack = footballer.attack.bind(footballer);
attack();
footballer.scoreGoal.call(footballer, 'Сиииии');
footballer.goToSubstitution.apply(footballer, ['Paulo Dibala']);