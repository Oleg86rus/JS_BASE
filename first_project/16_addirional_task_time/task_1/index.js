/*
Вам необходимо создать функцию allowVisa, которая будет фильтровать переданный массив из клиентов визового центра. Она принимает в себя массив клиентов. Каждый клиент - это объект с параметрами firstName (имя клиента), lastName (фамилия клиента), criminalRecord (тип данных boolean, есть ли судимость), passportExpiration (тип данных string, дата истечения срока действия паспорта).

Функция allowVisa должна возвращать отфильтрованный массив people, чтобы он удовлетворял следующим условиям:

Текущая дата должна быть меньше свойства passportExpiration
У клиента не должно быть судимости, т.е. значение свойства criminalRecord должно равняться false
 */

const peopleWithVisa = [
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: true,
        passportExpiration: '19.06.2023',
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '04.06.2021',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: false,
        passportExpiration: '31.07.2022',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2021',
    },
];

const allowVisa = (people) => {
    return people.filter((person) => {
        const splittedExpirationDate = person.passportExpiration.split('.');
        const year = splittedExpirationDate[splittedExpirationDate.length - 1];
        const month = splittedExpirationDate[1];
        const date = splittedExpirationDate[0];
        const passportExpirationDate = new Date(year, month - 1, date);
        console.log('passportExpirationDate', passportExpirationDate);
        if ((passportExpirationDate.getTime() > Date.now()) && !person.criminalRecord) {
            return true;
        }

        return false;
    });
};

const result = allowVisa(peopleWithVisa);
console.log('result', result);