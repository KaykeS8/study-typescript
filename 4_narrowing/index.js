"use strict";
const soma = (a, b) => {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else {
        console.log('Impossivel realizar a soma');
    }
};
soma('23', '34');
soma(123, 45);
soma('12', 2);
const operation = (arr, operation) => {
    if (operation) {
        if (operation === 'soma') {
            const sumAll = arr.reduce((acc, item) => {
                return acc + item;
            }, 0);
            console.log(sumAll);
        }
        else if (operation === 'dividir') {
            const valueDividio = arr.reduce((acc, item) => {
                const soma = acc / item;
                return soma;
            });
            console.log(valueDividio);
        }
        else if (operation === 'multiply') {
            const multiplyNum = arr.reduce((acc, item) => acc * item);
            console.log(multiplyNum);
        }
    }
    else {
        console.log("Please, write a operation 1- soma, 2-dividir, 3 - multiply");
    }
};
operation([12, 12], 'soma');
//  3 - instaceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User('Jhon');
const paul = new SuperUser('Paul');
console.log(jhon);
console.log(paul);
const userGreeting = (users) => {
    if (users instanceof SuperUser) {
        console.log(`Olá ${users.name} deseja ver os dados do sistema?`);
    }
    else if (users instanceof User) {
        console.log(`Olá ${users.name}`);
    }
};
userGreeting(jhon);
userGreeting(paul);
//  4 -operador in
class Dog {
    constructor(name, brend) {
        this.name = name;
        if (brend) {
            this.brend = brend;
        }
    }
}
const turca = new Dog('Preta');
const nina = new Dog('Nina', 'lhasa apso');
const showDogsDetails = (dog) => {
    if ('brend' in dog) {
        console.log(`${dog.name} é da raça ${dog.brend}`);
    }
    else {
        console.log(`${dog.name} SRD`);
    }
};
showDogsDetails(turca);
showDogsDetails(nina);
const showReviewUser = (review) => {
    if (!review) {
        console.log("Você não avaliou o produto!");
        return;
    }
    console.log(`A nota que você deu foi: ${review}, obrigado!`);
};
showReviewUser(false);
showReviewUser(true);
showReviewUser(1);
showReviewUser(2);
showReviewUser(3);
showReviewUser(4);
