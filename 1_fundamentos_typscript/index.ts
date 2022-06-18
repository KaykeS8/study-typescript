// 1- numbers
let x: number = 2004;
console.log(x);

x = 17;
console.log(typeof x);

const y: number = 3.234234;

console.log(typeof y, y.toPrecision(3));

//2-string

const firstName: string = "kayke";

console.log(firstName.toLocaleUpperCase());

let fullname: string;

const lastname: string = " de souza simao oliveira";

console.log(firstName.concat(lastname));

//3 - boolean

let a: boolean = true;
console.log(a, typeof a);

a = true;
console.log(a);

// 4 - inference e annotation

const teste: string = "teste";
let dados = "epa";

// desafio - 1
const somar = (num: number, num2?: number) => {
  if (num2) {
    return num + num2;
  }
  return num;
};

somar(2, 6);

// Desafio - 2

const numero: number = 2;
const newString = numero.toString();
const writeNumber: string = `O numero ${newString} está aqui`;

console.log(writeNumber);
