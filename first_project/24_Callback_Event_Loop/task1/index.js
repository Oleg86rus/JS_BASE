setTimeout(() => {
    console.log('setTimeout');
}, 0);

const promise = new Promise((resolve) => {
    console.log('Promise');
    resolve();
});

promise.then(() => {
    console.log('Promise resolve');
});

console.log('End');



/*
Сначала ответил так:

console.log('End');
console.log('Promise resolve');
console.log('setTimeout');
console.log('Promise');

Потом посмотрел, увидел, что ошибся.
console.log('Promise');
console.log('End');
console.log('Promise resolve');
console.log('setTimeout');

 */