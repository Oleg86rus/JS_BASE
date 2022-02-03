/*
Вам необходимо создать класс Person, от него мы сможем создавать экземпляры людей. Конструктор класса будет принимать 2 параметра:

name - имя человека
age - количество полных лет
Также вам необходимо реализовать метод compareAge в классе Person. Он принимает в себя экземпляр класса Person и сравнивает значения полных лет.

Данный метод должен возвращать результат в следующем формате: Если у одного Person количество лет больше либо равно, чем у другого, то выводите сообщение через alert “name1 старше, чем name2”. Иначе же “name1 младше, чем name2”.
 */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    compareAge(obj) {
        if (this.age >= obj.age) {
            console.log(`${this.name} старше, чем ${obj.name}`);
        } else {
            console.log(`${this.name} младше, чем ${obj.name}`);
        }
    }
}

const person1 = new Person('Максим', 24);
console.log(person1);
const person2 = new Person('Светлана', 36);
console.log(person2);
const person3 = new Person('Ирина', 23);
console.log(person3);

person1.compareAge(person2); // Максим младше, чем Светлана
person2.compareAge(person3); // Светлана старше, чем Ирина
person3.compareAge(person1); // Ирина младше, чем Максим