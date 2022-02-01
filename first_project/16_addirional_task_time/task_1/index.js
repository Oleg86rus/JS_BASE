/*
Вам необходимо создать функцию allowVisa, которая будет фильтровать переданный массив из клиентов визового центра. Она принимает в себя массив клиентов. Каждый клиент - это объект с параметрами firstName (имя клиента), lastName (фамилия клиента), criminalRecord (тип данных boolean, есть ли судимость), passportExpiration (тип данных string, дата истечения срока действия паспорта).

Функция allowVisa должна возвращать отфильтрованный массив people, чтобы он удовлетворял следующим условиям:

Текущая дата должна быть меньше свойства passportExpiration
У клиента не должно быть судимости, т.е. значение свойства criminalRecord должно равняться false
 */
console.log(new Date('19.06.2023'))

console.log(new Date('04.06.2021'))
console.log(new Date('31.07.2022'))
console.log(new Date('31.12.2021'))

const allowVisa = (arr) => {
    const arrResult = [];
    arr.forEach((obj) => {
        console.log(obj.passportExpiration);
        const dateOfPassportExpiration = new Date(obj.passportExpiration);
        console.log(Date.now());
        console.log(dateOfPassportExpiration);
        if (Date.now() < new Date(obj.passportExpiration)) {
            console.log('Текущая дата меньше срока истечения паспорта', obj.passportExpiration);
        }
    })
    return arrResult;
}


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
        criminalRecord: true,
        passportExpiration: '31.07.2022',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2021',
    },
];

const result = allowVisa(peopleWithVisa);
console.log('result', result);