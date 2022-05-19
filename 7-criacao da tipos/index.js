"use strict";
// 1 - generics
const showData = (arg) => {
    return `O dado é: ${arg}`;
};
console.log(showData(5));
console.log(showData('Teste generics'));
const showProductName = (obj) => {
    return `O nome do produto é: ${obj.name}`;
};
console.log(showProductName({ name: 'Dell', cor: "gray" }));
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
function showCharName(obj, key) {
    return `Você accesou o dado:${obj[key]}`;
}
const datesMyPerson = {
    name: 'kayke de souza simao oliveira',
    age: 17,
    hasDrivenLices: false
};
console.log(showCharName(datesMyPerson, 'hasDrivenLices'));
// 6 - typeof type operator
const userName = 'Kayke';
const userName3 = 'joão';
const newTruck = {
    km: 10000,
    kg: 8000,
    description: 'Caminhão para pouca carga'
};
const car = {
    kg: 2000,
    km: 5000
};
function showDetailsOfTruck(km) {
    console.log("Este veiculo possui Km: " + km);
}
showDetailsOfTruck(newTruck.km);
showDetailsOfTruck(car.km);
const somaVar = 15;
const details = 'hello world, my name is kayke and i have 17 age, want to became developer software and in my free time i like to read a book,watch movie, run in street and speak with my friends';
const message = "some Front-end";
console.log(message);
