"use strict";
//  1- tipo de objeto para função com interface
const showProductsDetails = ({ name, price, isAvailable }) => {
    console.log(`the name of product is ${name} and your price is ${price}`);
    if (isAvailable) {
        console.log("The product this disponible");
    }
};
const produtosSupermarket = {
    name: 'Smartphone',
    price: 5666,
    isAvailable: false
};
showProductsDetails(produtosSupermarket);
const showUserDetails = ({ email, role }) => {
    console.log(`O usuario tem o e-mail: ${email}`);
    if (role) {
        console.log(`A função do usuario é ${role}`);
    }
};
const oneUser = { email: 'kayke.simao@gmail.com', role: 'Desenvolvedor' };
const twoUser = { email: 'Joazinho.daPadaria@gmail.com' };
showUserDetails(oneUser);
showUserDetails(twoUser);
const fusca = {
    brand: 'honda civic 2022',
    wheels: 4
};
console.log(fusca);
let coords = {
    X: 23,
};
coords.Y = 345;
console.log(coords);
const kayke = { nome: 'kayke', idade: 17, sexo: "Homem", powers: ['Voar', 'Força', 'Velocidade'] };
const superMan = { nome: 'Taylor', idade: 34, sexo: "Homem" };
console.log(kayke);
console.log(superMan);
const arnold = { name: 'Arnaold', type: 'shotgun', calibre: 12 };
console.log(arnold);
//  7 - readonly array
let myArray = ['Maça', 'Banana', 'Pera'];
// myArray[3] = 'Uva'
console.log(myArray);
const myFiveNumbers = [23, 23, 4, 32];
// const myNumbersTwo: fiveNumberTypes = [12, 234, 34, 2, 234, 5]
// const mixOfArray: fiveNumberTypes = ['dsfs', true, 234, 23]
console.log(myFiveNumbers);
const arrayShakeds = ['bala', 12, false];
console.log(arrayShakeds);
// 9 - tuplas com readonly
function showNumbers(numbers) {
    return numbers[0] + numbers[1];
}
console.log(showNumbers([3, 5]));
