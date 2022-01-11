let product = 'Яблоко';
let quantity = 8;
let purchprase = true;
let varienty = null;
let sale = undefined;
let order = {
    product: 'Яблоко',
    quantity: 8,
    purchprase: false,
    varienty: null,
    sale: undefined
};
let BigIntQuantity = 8n;
let id = Symbol('id');

console.log(Number(product), Boolean(product), String(product));
console.log(Number(quantity), Boolean(quantity), String(quantity));
console.log(Number(purchprase), Boolean(purchprase), String(purchprase));
console.log(Number(varienty), Boolean(varienty), String(varienty));
console.log(Number(sale), Boolean(sale), String(sale));
console.log(Number(order), Boolean(order), String(order));
console.log(Number(BigIntQuantity), Boolean(BigIntQuantity), String(BigIntQuantity));
console.log(Boolean(id), String(id));
