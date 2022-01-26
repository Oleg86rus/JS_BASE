/*
Сейчас ваша задача состоит в том, чтобы создать функцию getDaysBeforeBirthday, которая будет возвращать количество дней до следующего дня рождения. Данная функция должна принимать 1 параметр nextBirthdayDate, который является объектом даты и указывает на дату вашего ближайшего дня рождения. Год стоит указывать ближайший к текущей дате, а не год вашего рождения.

Также рекомендуется создать вспомогательную функцию convertMsToDays, которая переводит миллисекунды в дни. Для округления итогового числа используйте Math.round.
 */
const nextBirthdayDate = new Date(2023, 0, 1);
const getDaysBeforeBirthday = nextBirthdayDate => nextBirthdayDate.getTime() - Date.now();
const convertMsToDays = (ms) => Math.round(ms / 1000 / 60 / 60 / 24);
getDaysBeforeBirthday(nextBirthdayDate);
console.log('Следующая дата дня рождения: ', nextBirthdayDate);
console.log(`До следующего дня рождения осталось ${convertMsToDays(getDaysBeforeBirthday(nextBirthdayDate))} дня(ей)!`);