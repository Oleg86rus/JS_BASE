/*
Ваша задача состоит в том, чтобы написать функцию, которая будет работать как мини-калькулятор математических выражений. Назовите данную функцию getMathResult. getMathResult принимает в себя 1 параметр expression, который является массивом и всегда состоит из 3-х элементов.

Первый и 3-й элементы в массиве expression - это числа, которые могут записывать как тип данных number либо string (например, 100 или ‘100’). 2-й элемент - это математический знак, который является типом данных string. Математический знак может быть исключительно следующими строками: “>”, “<”, “=”, “+”, “-”, “*”, “/”. Если был знак, которого не существует в данной последовательности, то функция getMathResult должна возвращать ошибку в виде строки “Ошибка”.

Также учтите, что в массив expression иногда может быть передано больше 3-х параметров, и это конечно же неверно. Но если все же такое было сделано, вам необходимо удалить лишние элементы в массиве, которые нельзя преобразовать к числу, которые являются ложными. Если же длина массива expression меньше 3, то функция getMathResult должна возвращать ошибку в виде строки “Ошибка”.
 */

const getMathResult = (expantion) => {
    if (expantion[1] === '+') {
        return Number(expantion[0]) + Number(expantion[2]);
    } else if (expantion[1] === '-') {
        return Number(expantion[0]) - Number(expantion[2]);
    } else if (expantion[1] === '/') {
        return Number(expantion[0]) / Number(expantion[2]);
    } else if (expantion[1] === '>' && Number(expantion[0]) > Number(expantion[2])) {
        return true;
    } else if (expantion[1] === '>' && Number(expantion[0]) < Number(expantion[2])) {
        return false;
    } else if (expantion[1] === '<' && Number(expantion[0]) < Number(expantion[2])) {
        return true;
    } else if (expantion[1] === '<' && Number(expantion[0]) > Number(expantion[2])) {
        return false;
    } else if (expantion[1] === '=' && Number(expantion[0]) === Number(expantion[2])) {
        return true;
    } else if (expantion[1] === '=' && Number(expantion[0]) !== Number(expantion[2])) {
        return false;
    } else if (expantion[1] === '**' && typeof (expantion[0]) === 'number' && typeof(expantion[2]) === 'number') {
        return expantion[0] ** expantion[2];
    } else if ((expantion[1] === '**' && typeof (expantion[0]) === 'string' || (expantion[1] === '**' && typeof (expantion[0]) === 'string'))) {
        console.error('Ошибка');
    }
};
console.log(typeof(5))
console.log(getMathResult(['200', '+', 300]));
console.log(getMathResult(['20', '-', '5']));
console.log(getMathResult([100, '/', 100]));
console.log(getMathResult([2, '-', 2]));
console.log(getMathResult(['5', '>', '10']));
console.log(getMathResult(['5', '<', '10']));
console.log(getMathResult(['1', '=', 1]));
console.log(getMathResult([3, '**', 3]));
console.log(getMathResult(['1', '**', '1']));

