// 1 - generics

const showData = <T>(arg: T): string => {
  return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData('Teste generics'))

// 2 - constrainnt em generic

const showProductName = <T extends { name: string }>(obj: T) => {
  return `O nome do produto é: ${obj.name}`
}

console.log(showProductName({ name: 'Dell' }))

// 3 - generics com interface

interface MyObject<T, U, C> {
  name: string
  readonly wheels: T,
  engine: U,
  color: C
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const Honda: Car = { name: "Honda civic", color: 'black', engine: 2.0, wheels: 4 }
const myPen: Pen = { name: 'Bic', wheels: false, engine: false, color: "Blue" }

console.log(Honda)
console.log(myPen)

//4 - type parameters

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = { hd: '10tb', ram: '160GB' }

console.log(getSomeKey(server, 'ram'))
console.log(getSomeKey(server, 'hd'))