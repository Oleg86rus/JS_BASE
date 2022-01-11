const product = 'Яблоко';
const quantity = 8;
const purchprase = true;
const varienty = null;
const sale = undefined;
const order = {
    product: 'Яблоко',
    quantity: 8,
    purchprase: false,
    varienty: null,
    sale: undefined
};
const BigIntQuantity = 8n;
const id = Symbol('id');

console.log('product: ', product, typeof product);
console.log('quantity: ', quantity, typeof quantity);
console.log('purchprase: ', purchprase, typeof purchprase);
console.log('varienty: ', varienty, typeof varienty);
console.log('sale: ', sale, typeof sale);
console.log('order: ', order, typeof order);
console.log('BigIntQuantity: ', BigIntQuantity, typeof BigIntQuantity);
console.log('id: ', id, typeof id);
