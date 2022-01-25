/*
Вам требуется создать функцию giveTalonsInOrder, которая сортирует очередь из пациентов. Она принимает в себя 2 параметра:

patients - массив объектов. Каждый объект хранит информацию об имени пациента и его уникальном номере - id.
orders - массив уникальных номеров id, который указывает порядок, в котором должны стоять в очереди пациенты.
Функция должна возвращать новый массив, в котором объекты из массива patients будут отсортированы по id из массива orders.
 */
const giveTalonsInOrder = (patients, orders) => {
    const peopleForSort = [];
    orders.forEach((item) => {
        peopleForSort.push(patients.find(obj => obj.id === item));
    })
    return peopleForSort;
}

const ordersArr = [4, 2, 1, 3];
console.log('Очередь по id: ', ordersArr)
const people = [
    { id: 1, name: "Максим" },
    { id: 2, name: "Николай" },
    { id: 3, name: "Ангелина" },
    { id: 4, name: "Виталий" },
];
console.log('Изначальный массив', people);
const result = giveTalonsInOrder(people, ordersArr);
console.log('Отсортированный массив: ', result);
