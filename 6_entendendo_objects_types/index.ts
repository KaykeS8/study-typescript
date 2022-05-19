//  1- tipo de objeto para função com interface

interface Product {
    name: string;
    price: number;
    isAvailable: boolean
}

const showProductsDetails = ({ name, price, isAvailable }: Product) => {
    console.log(`the name of product is ${name} and your price is ${price}`)
    if (isAvailable) {
        console.log("The product this disponible")
    }
}

const produtosSupermarket: Product = {
    name: 'Smartphone',
    price: 5666,
    isAvailable: false
}

showProductsDetails(produtosSupermarket)

//  2 - propriedade opcional em interface

interface IUser {
    email: string
    role?: string
}

const showUserDetails = ({ email, role }: IUser) => {
    console.log(`O usuario tem o e-mail: ${email}`)
    if (role) {
        console.log(`A função do usuario é ${role}`)
    }
}

const oneUser: IUser = { email: 'kayke.simao@gmail.com', role: 'Desenvolvedor' }
const twoUser: IUser = { email: 'Joazinho.daPadaria@gmail.com' }


showUserDetails(oneUser)
showUserDetails(twoUser)

// 3 - readonly

interface ICar {
    brand: string
    readonly wheels: number
}

const fusca: ICar = {
    brand: 'honda civic 2022',
    wheels: 4
}

console.log(fusca)

// fusca.wheels = 5

//  4- index signature

interface ICoordObject {
    [index: string]: number
}

let coords: ICoordObject = {
    X: 23,
}

coords.Y = 345

console.log(coords)

// 5 - extending types
interface IHuman {
    nome: string;
    idade: number;
    sexo: 'Homem' | 'Mulher';
}

interface ISuperHuman extends IHuman {
    powers: Array<string>
}

const kayke: ISuperHuman = { nome: 'kayke', idade: 17, sexo: "Homem", powers: ['Voar', 'Força', 'Velocidade'] }

const superMan: IHuman = { nome: 'Taylor', idade: 34, sexo: "Homem" }

console.log(kayke)
console.log(superMan)

//  6 - intersection types

interface ICharater {
    name: string;
}

interface IGun {
    type: string;
    calibre: number
}

type HumamGunType = ICharater & IGun

const arnold: HumamGunType = { name: 'Arnaold', type: 'shotgun', calibre: 12 }

console.log(arnold)

//  7 - readonly array

let myArray: ReadonlyArray<string> = ['Maça', 'Banana', 'Pera']

// myArray[3] = 'Uva'

console.log(myArray)

// 8 - Tuplas

type fiveNumberTypes = [number, number, number, number]

const myFiveNumbers: fiveNumberTypes = [23, 23, 4, 32]
// const myNumbersTwo: fiveNumberTypes = [12, 234, 34, 2, 234, 5]
// const mixOfArray: fiveNumberTypes = ['dsfs', true, 234, 23]
console.log(myFiveNumbers)

type skaheArrayType = [string, number, boolean]
const arrayShakeds: skaheArrayType = ['bala', 12, false]

console.log(arrayShakeds)

// 9 - tuplas com readonly

function showNumbers(numbers: readonly [number, number]): number {
    return numbers[0] + numbers[1]
}

console.log(showNumbers([3, 5]))