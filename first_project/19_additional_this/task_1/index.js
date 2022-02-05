/*
Суть игры состоит в том, что есть 2 замка (атакующий и защищающийся), которые враждуют между собой. Пользователь играет за атакующий замок. Царю атакующего замка необходимо каждый раз просчитывать возможности захвата враждующего замка. Когда возможность будет достаточно большой, то необходимо не задумываясь атаковать.

В коде у вас изначально есть 2 объекта attacker и defender, которые являются аналогиями замков и у которых есть свойства, отвечающие за количество боевых единиц каждого типа. Например, archer - это лучники, footSoldiers - пехотинцы, и т.д.

В объекте attacker вам необходимо создать 3 функции:

checkChancesToWin Проверяет шансы атакующего замка захватить защищающийся замок. Данная функция принимает в себя 1 параметр defenderObject, который является объектом защищающегося замка - defender. Она должна сверять количество всех боевых единиц у обоих замков. Например, если у атакующего замка значение свойства archer больше, чем у защищающегося, то к шансам захвата необходимо прибавить 1 (изначально значение шансов должно быть равно нулю). Функция должна возвращать массив, в котором 1-й элемент - это шансы атакующего замка на захват, а 2-й - это значение максимального шанса на захват (количество ключей в объекте defenderObject). То есть, если у атакующего замка значения свойств archer и cavalry больше, чем у защищающегося, а другие значения свойств - меньше, то шансы на захват должны быть [2, 4] (образно шансы равны 2 из 4 либо 50%)
improveArmy Прибавляет к каждому числовому значению объекта attacker по 5 единиц (обновляет свойства archer, footSoldier, cavalry, artillery). Данная функция не принимает никаких параметров
attack Принимает в себя 1 параметр - это объект защищающегося замка defender. Сначала эта функция проверяет, если шансы на захват (вызываем функцию checkChancesToWin) меньше, чем 70% от максимальных шансов, то необходимо усилиться (вызвать функцию improveArmy) и вывести сообщение через alert “Наши шансы равны ${ourArmyChances}/${maximumChances}. Необходимо укрепление!” (ourArmyChances - шансы атакующего замка на захват, maximumChances - максимальный шанс на захват). Иначе же требуется вывести сообщение в модальном окне “Мы усилились! Мы несомненно победим! Наши шансы высоки!”

 */
const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
}
const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
    checkChancesToWin: function checkChancesToWin(defenderObject) {
        let moreEnemyInTime = 0;
        let maxChanceToWin = Object.entries(defenderObject).length;
        let finalChanceToWin;
        for (let i = 0; i < Object.entries(defenderObject).length; i++) {
            if (Object.entries(this)[i][1] > Object.entries(defenderObject)[i][1]) {
                moreEnemyInTime += 1;
            }
        }
        finalChanceToWin = moreEnemyInTime / maxChanceToWin * 100;
        console.log('Больше воинов в случаях: ', moreEnemyInTime);
        console.log('Всего видов войск: ', maxChanceToWin);
        console.log('Шанс победы в %: ', finalChanceToWin);
        return {
            moreEnemyInTime: moreEnemyInTime,
            maxChanceToWin: maxChanceToWin,
            finalChanceToWin: finalChanceToWin
        }
    },
    improveArmy: function improveArmy () {
        for (let key in this) {
            if (typeof this[key] === 'number') {
                this[key] += 5;
                console.log(`Number of ${key}`, this[key]);
            }
        }
        return this;
    },
    attack: () => {
        const chanceToWin = attacker.checkChancesToWin(defender);
        if (chanceToWin.finalChanceToWin < 70) {
            attacker.improveArmy();
            alert(`Наши шансы равны ${chanceToWin.finalChanceToWin}%. Необходимо укрепление!`);
            console.log(`Наши шансы равны ${chanceToWin.finalChanceToWin}%. Необходимо укрепление!`);
        } else {
            alert(`Мы усилились! Мы несомненно победим! Наши шансы высоки! Шанс на победу = ${chanceToWin.finalChanceToWin}%`);
            console.log(`Мы усилились! Мы несомненно победим! Наши шансы высоки! Шанс на победу = ${chanceToWin.finalChanceToWin}%`);
        }
    }
}

attacker.attack(defender);
attacker.attack(defender);
attacker.attack(defender);
console.log(attacker.checkChancesToWin(defender));
