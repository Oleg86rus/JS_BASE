/*
Вам необходимо создать функцию makeDomestic, которая будет работать с ключевым словом this (пример использования ниже). Она должна выводить в консоль всю информацию о животном с помощью сообщения: “type по имени name говорит sound”, где name - имя животного, type - его тип и sound - результат вызова функции makeSound.

Также функция makeDomestic должна возвращать новый объект животного, в котором будут все прошлые параметры (name, type, makeSound), а также будет добавлен новый параметр isDomestic. Он является типом данных boolean и показывает, домашнее ли животное или нет. Значение для свойства isDomestic (true либо false) вам необходимо передать как параметр в функцию makeDomestic.

Кроме этого для обращения к свойствам животного функция makeDomestic должна использовать только this. Т.е. вам разрешено обращаться к свойствам только через this.name либо this.makeSound, но никак не bird.name либо bird.makeSound.

Вам необходимо решить эту задачу 3-мя способами: через bind, call и apply. Вызовите функцию makeDomestic 3 раза используя данные методы. При использовании bind, функция makeDomestic должна работать с объектом dog, при apply и call - с объектом bird. Не забывайте передавать параметр isDomestic в функцию при ее вызове.
 */

const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
};
const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    }
};
function makeDomestic(makeDomestic) {
    this.isDomestic = makeDomestic;
    console.log(this);
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    return this;
}

makeDomestic.call(bird, false);
makeDomestic.apply(bird, [false]);

const dogMakeDomestic = makeDomestic.bind(dog, true);
dogMakeDomestic();
console.log(dogMakeDomestic());

/*
Сообщение в консоли: "Собака по имени Чарли говорит Гав-Гав"

domesticDog = {
  name: 'Чарли',
  type: 'Собака',
  isDomestic: true,
  makeSound() {
    return 'Гав-Гав'
  }
}
*/