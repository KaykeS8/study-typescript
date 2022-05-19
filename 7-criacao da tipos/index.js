"use strict";
// 1 - generics
const showData = (arg) => {
    return `O dado é: ${arg}`;
};
console.log(showData(5));
console.log(showData('Teste generics'));
// 2 - constrainnt em generic
const showProductName = (obj) => {
    return `O nome do produto é: ${obj.name}`;
};
console.log(showProductName({ name: 'Dell' }));
const Honda = { name: "Honda civic", color: 'black', engine: 2.0, wheels: 4 };
const myPen = { name: 'Bic', wheels: false, engine: false, color: "Blue" };
console.log(Honda);
console.log(myPen);
//4 - type parameters
function getSomeKey(obj, key) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = { hd: '10tb', ram: '160GB' };
console.log(getSomeKey(server, 'ram'));
console.log(getSomeKey(server, 'hd'));
