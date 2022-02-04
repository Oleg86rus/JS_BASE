/*
Для начала вам необходимо создать класс Developer, конструктор которого будет принимать 3 параметра:

fullName - имя разработчика
age - возраст разработчика
position - текущая позиция разработчика в компании (например, Junior, Middle, Senior)
Инициализируйте все параметры при помощи this. Также создайте внутри конструктора поле technologies, которое по умолчанию будет равно пустому массиву.

Кроме этого в классе Developer вам необходимо создать 2 метода:

code - метод, у которого тело изначально пустое (в фигурных скобках ничего нет)
learnNewTechnology - данный метод принимает в себя 1 параметр technology, который должен добавляться в конец массива technologies
После проделанных действий у вас должен получиться шаблон Developer, благодаря которому вы будете создавать дочерние классы.

Вам сейчас необходимо создать 3 дочерних класса от класса Developer:

JuniorDeveloper. Конструктор данного класса принимает 2 параметра: fullName и age. Вызовите конструктор родительского класса и передайте туда эти 2 параметра. В качестве 3-го у нас выступает position. Вам необходимо его указать по умолчанию. Напишите значение “Junior” в качестве 3-го параметра вызова родительского конструктора. Кроме этого переопределить метод code, чтобы он выводил в консоль строку “Junior разработчик пишет код...”. Массив technologies должен содержать следующие технологии: 'HTML', 'CSS', 'JavaScript'
MiddleDeveloper. Проделайте ту же самую работу в конструкторе, что и JuniorDeveloper. Только на место position передавайте значение “Middle”. Метод code у класса MiddleDeveloper должен выводить в консоль строку “Middle разработчик пишет код...”. Массив technologies должен содержать следующие технологии: 'HTML', 'CSS', 'JavaScript', ‘React’
SeniorDeveloper. Проделайте ту же самую работу в конструкторе, что и JuniorDeveloper. Только на место position передавайте значение “Senior”. Метод code у класса SeniorDeveloper должен выводить в консоль строку “Senior разработчик пишет код...”. Массив technologies должен содержать следующие технологии: 'HTML', 'CSS', 'JavaScript', ‘React’, ‘NodeJS’

 */

class Developer {
    constructor(fullName, age, position) {
        this.fullName = fullName;
        this.age = age;
        this.position = position;
        this.techology = [];
    }
    code() {
    }
    learnNewTechnology(technology) {
        this.techology.push(technology);
    }
}
class JuniorDeveloper extends Developer {
    constructor(fullName, age, position = 'Junior') {
        super(fullName, age, position);
    }
    code() {
        console.log(`${this.position} разработчик пишет код...`);
    }
}
class MiddleDeveloper extends Developer {
    constructor(fullName, age, position = 'Middle') {
        super(fullName, age, position);
    }
    code() {
        console.log(`${this.position} разработчик пишет код...`);
    }
}
class SeniorDeveloper extends Developer {
    constructor(fullName, age, position = 'Senior') {
        super(fullName, age, position);
    }
    code() {
        console.log(`${this.position} разработчик пишет код...`);
    }
}
const juniorDeveloper = new JuniorDeveloper('Анастасия', 20);
const middleDeveloper = new MiddleDeveloper('Игорь', 25);
const seniorDeveloper = new SeniorDeveloper('Максим', 30);

juniorDeveloper.code(); // Junior разработчик пишет код...
juniorDeveloper.learnNewTechnology('HTML');
juniorDeveloper.learnNewTechnology('CSS');
juniorDeveloper.learnNewTechnology('JavaScript');
console.log(juniorDeveloper);
middleDeveloper.code(); // Middle разработчик пишет код…
middleDeveloper.learnNewTechnology('HTML');
middleDeveloper.learnNewTechnology('CSS');
middleDeveloper.learnNewTechnology('JavaScript');
middleDeveloper.learnNewTechnology('React');
console.log(middleDeveloper);
seniorDeveloper.code(); // Senior разработчик пишет код...
seniorDeveloper.learnNewTechnology('HTML');
seniorDeveloper.learnNewTechnology('CSS');
seniorDeveloper.learnNewTechnology('JavaScript');
seniorDeveloper.learnNewTechnology('React');
seniorDeveloper.learnNewTechnology('NodeJS');
console.log(seniorDeveloper);

console.log(juniorDeveloper.fullName, juniorDeveloper.age,
    juniorDeveloper.position); // 'Анастасия', 20, 'Junior'
console.log(middleDeveloper.fullName, middleDeveloper.age,
    middleDeveloper.position); // 'Игорь', 25, 'Middle'
console.log(seniorDeveloper.fullName, seniorDeveloper.age,
    seniorDeveloper.position); // 'Максим', 30, 'Senior'