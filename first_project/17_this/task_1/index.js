 /*
Для начала вам необходимо создать объект student, в котором будут 3 свойства:

stack. Массив из строк, где каждая строка - это технология. Изначально, массив stack должен быть равен [‘HTML’].
level. Тип данных number. level отвечает за текущий уровень студента и изначально равен 1.
improveLevel. Функция, которая сначала увеличивает значение свойства level у студента на единицу. Если level равен 2-м, то вам необходимо добавить в конец массива stack значение ‘CSS’, если 3-м - добавляете в конец stack значение ‘JavaScript’, 4-м - ‘React’, 5-ти - ‘NodeJS’. Если значение level стало больше 5-ти, то вам необходимо вывести в модальном окне через alert сообщение “Студент выучил все технологии!”. Также функция improveLevel должна возвращать в самом конце обновленный объект student.
В итоге значение свойства stack после выполнения кода ниже должно быть равно ["HTML", "CSS", "JavaScript", "React", "NodeJS"].

Примечание: цепочка из подряд идущих функций impoveLevel работает так, потому что improveLevel возвращает объект student, а у объекта student есть метод impoveLevel.
 */

const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
        this.level += 1;
        if (this.level === 2) {
            this.stack.push('CSS');
            console.log('level = 2: ', this.stack);
        } else if (this.level === 3) {
            this.stack.push('JavaScript');
            console.log('level = 3: ', this.stack);
        } else if (this.level === 4) {
            this.stack.push('React');
            console.log('level = 4: ', this.stack);
        } else if (this.level === 5) {
            this.stack.push('NodeJs');
            console.log('level = 5: ', this.stack);
        }
        console.log('Итог функции: ', this);
        return this;
    }

}
console.log('Изначальный объект: ', student);
console.log('Вызов функции: ', student.improveLevel());
student
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel();