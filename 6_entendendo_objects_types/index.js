//  1- tipo de objeto para função com interface
var showProductsDetails = function (_a) {
    var name = _a.name, price = _a.price, isAvailable = _a.isAvailable;
    console.log("the name of product is ".concat(name, " and your price is ").concat(price));
    if (isAvailable) {
        console.log("The product this disponible");
    }
};
var produtosSupermarket = {
    name: 'Smartphone',
    price: 5666,
    isAvailable: false
};
showProductsDetails(produtosSupermarket);
var showUserDetails = function (_a) {
    var email = _a.email, role = _a.role;
    console.log("O usuario tem o e-mail: ".concat(email));
    if (role) {
        console.log("A fun\u00E7\u00E3o do usuario \u00E9 ".concat(role));
    }
};
var oneUser = { email: 'kayke.simao@gmail.com', role: 'Desenvolvedor' };
var twoUser = { email: 'Joazinho.daPadaria@gmail.com' };
showUserDetails(oneUser);
showUserDetails(twoUser);
var fusca = {
    brand: 'honda civic 2022',
    wheels: 4
};
console.log(fusca);
var coords = {
    X: 23
};
coords.Y = 345;
console.log(coords);
var kayke = { nome: 'kayke', idade: 17, sexo: "Homem", powers: ['Voar', 'Força', 'Velocidade'] };
var superMan = { nome: 'Taylor', idade: 34, sexo: "Homem" };
console.log(kayke);
console.log(superMan);
var arnold = { name: 'Arnaold', type: 'shotgun', calibre: 12 };
console.log(arnold);
//  7 - readonly array
var myArray = ['Maça', 'Banana', 'Pera'];
// myArray[3] = 'Uva'
console.log(myArray);
var myFiveNumbers = [23, 23, 4, 32];
// const myNumbersTwo: fiveNumberTypes = [12, 234, 34, 2, 234, 5]
// const mixOfArray: fiveNumberTypes = ['dsfs', true, 234, 23]
console.log(myFiveNumbers);
var arrayShakeds = ['bala', 12, false];
console.log(arrayShakeds);
// 9 - tuplas com readonly
function showNumbers(numbers) {
    return numbers[0] + numbers[1];
}
console.log(showNumbers([3, 5]));
