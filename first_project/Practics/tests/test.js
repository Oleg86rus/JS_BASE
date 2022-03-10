// Нужна функция, которая в итоге в консоль выведет Строку Hello world
// Ключ - это буква, значение - это ее место во фразе

const input ={
    ' ': [5],
    'd': [10],
    'e': [1],
    'H': [0],
    'l': [2,3,9],
    'o': [4,7],
    'r': [8],
    'w': [6],
}
const t0 = performance.now()
const test = (m) => {
    let str = '';
    const arr = Object.values(m)
    const letterInArr = Object.keys(m);
    for (let i = 0; i <= 10; i++) {
        const number = arr.findIndex(el => el.includes(i))
        str += letterInArr[number]
    }
    return str
}
const t1 = performance.now()
console.log(test(input))
console.log(t1-t0, 'ms')