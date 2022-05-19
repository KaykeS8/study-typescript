"use strict";
//  1 - void
function withoutReturn() {
    console.log('Esta função não tem retorno');
}
//  2 - callback com argumento
const greeting = (name) => {
    return `Ola ${name}`;
};
const showTheUsers = (func, user) => {
    console.log("Preparando a função");
    const greet = func(user);
    console.log(greet);
};
showTheUsers(greeting, 'layle');
showTheUsers(greeting, 'Julia');
//  3 - generic functions
const firstElement = (arr) => {
    return arr[0];
};
function margeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = margeObjects({ nome: 'kayke', age: 17 }, { date: 'Node.js', salary: 95694 });
console.log(newObject);
const { nome, date } = newObject;
console.log(nome);
//  4 - constraints
function biggestNumber(a, b) {
    let bigest;
    if (+a > +b) {
        bigest = a;
    }
    else {
        bigest = b;
    }
    return bigest;
}
console.log(biggestNumber(12, 32));
console.log(biggestNumber('123', '23'));
// 5 - especificar tipo de argumento
const mergeArray = (arr1, arr2) => {
    return arr1.concat(arr2);
};
console.log(mergeArray([1, 2, 3], [4, 5, 6]));
console.log(mergeArray([2, 6, 12, 44], ['pares', 'impars']));
//  6 - Parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Ola ${greet} ${name}, tudo bem ? `;
    }
    return `Olá ${name}`;
}
console.log(modernGreeting('Julia'));
console.log(modernGreeting('kayke', 'desenvolvedor'));
//  7 - parâmetro default
const sumTwoNumbers = (numOne, numTwo = 5) => {
    return numOne / numTwo;
};
console.log(sumTwoNumbers(200));
//  8 - tipo unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
}
doSomething([5, 3, 5]);
//  9 - tipo never
function shoeErrorMessage(msg) {
    throw new Error(msg);
}
// console.log(shoeErrorMessage("algum erro"))
//  10 - rest operators
const somaTotal = (...num) => {
    return num.reduce((acc, item) => {
        return acc + item;
    }, 0);
};
console.log(somaTotal(23, 23, 23));
function showProductsDetails({ name, descricao }) {
    return `O nome do produto é ${name} e sua descrição é essa ${descricao}`;
}
const objPhone = {
    name: 'Iphone',
    descricao: 'Um produto muito reverienciado no mercado da tecnologia pela sua alta qualidade'
};
console.log(showProductsDetails(objPhone));
