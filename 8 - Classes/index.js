"use strict";
// 1 - Campos em classe
class User {
}
const dados = new User();
dados.idade = 17;
dados.name = 'Kayke de souza simão oliveira';
console.log(dados);
// 2 - contructor
class UseInformation {
    constructor(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
}
const firstUser = new UseInformation('kayke', 17, 69);
console.log(firstUser);
// 3 - campos readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car('Fusca 99');
fusca.name = 'Honda civic 2022';
fusca.wheels = 6;
console.log(fusca);
