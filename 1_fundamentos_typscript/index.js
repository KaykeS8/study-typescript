"use strict";
// 1- numbers
let x = 2004;
console.log(x);
x = 17;
console.log(typeof x);
const y = 3.234234;
console.log(typeof y, y.toPrecision(3));
//2-string
const firstName = "kayke";
console.log(firstName.toLocaleUpperCase());
let fullname;
const lastname = " de souza simao oliveira";
console.log(firstName.concat(lastname));
//3 - boolean
let a = true;
console.log(a, typeof a);
a = true;
console.log(a);
// 4 - inference e annotation
const teste = "teste";
let dados = "epa";
// desafio - 1
const somar = (num, num2) => {
    if (num2) {
        return num + num2;
    }
    return num;
};
somar(2, 6);
// Desafio - 2
const numero = 2;
const newString = numero.toString();
const writeNumber = `O numero ${newString} está aqui`;
console.log(writeNumber);
