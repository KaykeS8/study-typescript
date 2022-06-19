"use strict";
// 1 -Array
const numeros = [10, 20, 34];
console.log(numeros);
const numberTotal = numeros.reduce((acc, item) => {
    return acc + item;
}, 0);
console.log(numberTotal);
const frases = [
    "Desenvolvedor Front-end",
    "Desenvolvedor back-end",
    "Desenvolvedor full-stack",
];
frases.push("Dev ops");
console.log(frases);
// frases.forEach(item => console.log(`Você trabalha como ${item}`));
// 2 - Outra sintexe de Array
const salarios = [3000, 7800, 14500, 6043, 3453, 867, 345];
salarios.unshift(2000);
console.log(salarios);
const salaryLarger = salarios.filter((sal) => sal > 2000);
console.log(salaryLarger);
const produtos = ["Banana", "Maça", "Pera", "Uva", "Kiwi"];
produtos.push("Acerola");
console.log(produtos);
const produtcts = produtos.slice(0, 3);
console.log(produtcts);
// 3 - any
const arr1 = [
    "Vagas aberta",
    "A falência",
    122,
    "Revolução do bichos",
    "Mais esperto que o diabo",
    true,
    {
        nome: "Julia",
        idade: 19,
    },
];
arr1.push([234, "", 345]);
console.log(arr1[6].nome);
//4 - tipo de paramentro
function soma(num, num2) {
    console.log((num + num2) / 2);
}
soma(9, 9);
[];
//5 - retorno de função
function greeting(name, idade, profession, trabalhando) {
    return `${name} / ${idade} / ${profession} / ${trabalhando}`;
}
console.log(greeting("kayke", 17, "desenolvedor web", false));
// 6 - funções anonimas
// 7 - Tipos de objetos
function coordenadas(coord) {
    console.log(`Coordenada X é ${coord.x}`);
    console.log(`Coordenada Y é ${coord.y}`);
    return true;
}
const caminho = { x: 123, y: 67 };
console.log(coordenadas(caminho));
//  8 - Propriedades opcionais
const showNumbers = (a, b, c) => {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
};
showNumbers(2, 4);
console.log("---------");
showNumbers(3, 5, 7);
// 9 - Validaçãp de props opcionais
// Valdar a propriedade com !== de undefined
const advancedGreeting = (firstName, lastName) => {
    if (firstName && lastName === undefined) {
        return console.log(firstName);
    }
    else if (lastName !== undefined) {
        return console.log(`${firstName} ${lastName}`);
    }
};
advancedGreeting("kayke");
advancedGreeting("kayke", "de souza simão oliveira");
// 10 - Union types
const showBalance = (balance) => {
    return `O saldo da conta é ${balance}`;
};
console.log(showBalance(24));
console.log(showBalance("Negativo"));
const novaArray = [
    "nome",
    34,
    false,
    { nome: "kayke" },
];
console.log(novaArray);
// 11 - Avançando com Union types
const showUserRole = (role) => {
    if (typeof role === "boolean") {
        return "Usuario não aprovado!";
    }
    return `A função do usuario é ${role}`;
};
console.log(showUserRole("Editor"));
console.log(showUserRole(false));
const showId = (id) => {
    console.log(`ID: ${id}`);
};
showId(23);
showId("nove");
const showCoordenadas = (obj) => {
    console.log(`${obj.X} ${obj.y} ${obj.z}`);
};
const objCoord = {
    X: 123,
    y: 12343,
    z: 325,
};
showCoordenadas(objCoord);
const DatePerson = {
    nome: "kayke de souza simao oliveira",
    age: 17,
    profession: "Desenvolvedor front-end",
};
// Com o type não e possivel adicionar outro valor
// O codígo abaixa retorna um erro
/* type PersonType = {
    age: number
} */
// 15 - Literal types
let test;
test = "testando";
console.log(test);
const direcoes = (direction) => {
    return `A direção escolhidad foi ${direction}`;
};
console.log(direcoes("right"));
const object = {
    name: "Kayke de souza simao oliveira",
    profession: "Front-end",
};
// 16 - nan null assertion operators ?
const paragrafo = document.getElementById("#paragraph");
console.log(paragrafo?.innerHTML);
// 17 - bigint
let n;
n = 10n;
console.log(typeof n);
//  18 - Symbol
let SymbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(SymbolA == symbolB);
console.log(SymbolA === symbolB);
