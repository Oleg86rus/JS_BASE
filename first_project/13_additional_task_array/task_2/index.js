/*
Ваша задача состоит в том, чтобы написать функцию, которая будет работать как мини-калькулятор математических выражений. Назовите данную функцию getMathResult. getMathResult принимает в себя 1 параметр expression, который является массивом и всегда состоит из 3-х элементов.

Первый и 3-й элементы в массиве expression - это числа, которые могут записывать как тип данных number либо string (например, 100 или ‘100’). 2-й элемент - это математический знак, который является типом данных string. Математический знак может быть исключительно следующими строками: “>”, “<”, “=”, “+”, “-”, “*”, “/”. Если был знак, которого не существует в данной последовательности, то функция getMathResult должна возвращать ошибку в виде строки “Ошибка”.

Также учтите, что в массив expression иногда может быть передано больше 3-х параметров, и это конечно же неверно. Но если все же такое было сделано, вам необходимо удалить лишние элементы в массиве, которые нельзя преобразовать к числу, которые являются ложными. Если же длина массива expression меньше 3, то функция getMathResult должна возвращать ошибку в виде строки “Ошибка”.
 */

const getMathResult = (expantion) => {
    const mathOperator = ['=', '-', '+', '/', '*', '<', '>', '**'];
    const newArray = [];
    let indexOfFirstElementInNewArray = 0;
    for (let i = 0; i <= expantion.length; i++) {
        if (!isNaN(Number(expantion[i]))) {
            newArray.push(Number(expantion[i]));
            indexOfFirstElementInNewArray = i + 1;
            break;
        }
    }
    for (let i = 0; i <= expantion.length; i++) {
        if (mathOperator.find((el) => el === expantion[i])) {
            newArray.push(expantion[i]);
            break;
        }
    }
    for (let i = indexOfFirstElementInNewArray; i <= expantion.length; i++) {
        if (!isNaN(Number(expantion[i]))) {
            newArray.push(expantion[i]);
            indexOfFirstElementInNewArray = i;
            break;
        }
    }
    if (newArray.length < 3 && !isNaN(newArray[0]) && !isNaN(newArray[1])) {
        return console.error(`В вашем массиве математический оператор не найден!\nИтог: ${newArray}`);
    } else if (newArray.length < 3) {
        return console.error(`Вы передали массив меньше 3 элементов!`);
    } else {
        switch (newArray[1]) {
            case '=':
                return `Вычислить:\n${newArray.join('')}:\n ${newArray[0]} = ${newArray[2]} : ${newArray[0] === newArray[2]}`;
            case '-':
                return `Вычислить:\n${newArray.join('')}:\n ${newArray[0]} - ${newArray[2]} = ${newArray[0] - newArray[2]}`;
            case '+':
                return `Вычислить:\n${newArray.join('')}:\n ${newArray[0]} + ${newArray[2]} = ${newArray[0] + newArray[2]}`;
            case '/':
                return `Вычислить:\n${newArray.join('')}:\n ${newArray[0]} / ${newArray[2]} = ${newArray[0] / newArray[2]}`;
            case '*':
                return `Вычислить:\n${newArray.join('')}:\n ${newArray[0]} * ${newArray[2]} = ${newArray[0] * newArray[2]}`;
            case '<':
                return `Вычислить:\n${newArray.join('')}:\n ${newArray[0]} < ${newArray[2]} : ${newArray[0] < newArray[2]}`;
            case '>':
                return `Вычислить:\n${newArray.join('')}:\n ${newArray[0]} > ${newArray[2]} : ${newArray[0] > newArray[2]}`;
            case '**':
                return `Вычислить:\n${newArray.join('')}:\n ${newArray[0]} ** ${newArray[2]} = ${newArray[0] ** newArray[2]}`;
        }
    }
    return console.error('ОШИБКА!');
};
console.log(getMathResult(['200', '+', 300]));
console.log(getMathResult(['+', 300]));
console.log(getMathResult(['20', '-', '5']));
console.log(getMathResult([100, '/', 100]));
console.log(getMathResult([2, '-', 2]));
console.log(getMathResult(['5', '>', '10']));
console.log(getMathResult(['5', '<', '10']));
console.log(getMathResult(['1', '=', 1]));
console.log(getMathResult([3, '**', 3]));
console.log(getMathResult(['1', '**', '1']));
console.log(getMathResult(['1', '**', 1]));
console.log(getMathResult(['900', 'hello', 'javascript', 'help200', '/', 4]));
console.log(getMathResult(['900', 'hello', 'javascript', 'help200', '*', 4]));
console.log(getMathResult(['900', '+', '250', 'help200', 25, 4]));
console.log(getMathResult(['900', 'hello', 'javascript', 'help200', 'asv', 4]));