// 1 - generics

const showData = <T>(arg: T): string => {
  return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData('Teste generics'))

// 2 - constrainnt em generic

interface objectTypes { name: string }

const showProductName = <T extends objectTypes>(obj: T) => {
  return `O nome do produto é: ${obj.name}`
}

console.log(showProductName({ name: 'Dell', cor: "gray" }))

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

// 5 - keyof type operator

type charater = { name: string, age: number, hasDrivenLices: boolean }

type C = keyof charater

function showCharName(obj: charater, key: C): string {
  return `Você accesou o dado:${obj[key]}`
}

const datesMyPerson: charater = {
  name: 'kayke de souza simao oliveira',
  age: 17,
  hasDrivenLices: false
}

console.log(showCharName(datesMyPerson, 'hasDrivenLices'))

// 6 - typeof type operator
const userName: string = 'Kayke'
const userName3: typeof userName = 'joão'

// 7 - indexed Acess types

type truck = { km: number, kg: number, description: string }
type km = truck['km']

const newTruck: truck = {
  km: 10000,
  kg: 8000,
  description: 'Caminhão para pouca carga'
}

const car = {
  kg: 2000,
  km: 5000
}

function showDetailsOfTruck(km: km) {
  console.log("Este veiculo possui Km: " + km)
}

showDetailsOfTruck(newTruck.km)
showDetailsOfTruck(car.km)

// 8 - conditional expression type

interface A { }
interface B extends A { }

type myType = B extends A ? number : string

const somaVar: myType = 15

interface Teste {
  showDetails(): string
}

type myTypeB = Teste extends { showDetails(): string } ? string : boolean

const details: myTypeB = 'hello world, my name is kayke and i have 17 age, want to became developer software and in my free time i like to read a book,watch movie, run in street and speak with my friends'

// 9 - Template literals type

type testA = 'Front-end' | 'Back-end' | 'Full-stack'
type CustomType = `some ${testA}`

const message: CustomType = "some Front-end"

console.log(message)