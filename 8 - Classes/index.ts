// 1 - Campos em classe
class User {
  name!: string
  idade!: number
}

const dados = new User()

dados.idade = 17
dados.name = 'Kayke de souza simão oliveira'

console.log(dados)

// 2 - contructor

class UseInformation {
  name
  age
  weight
  constructor(name: string, age: number, weight: number) {
    this.name = name
    this.age = age
    this.weight = weight
  }
}

const firstUser = new UseInformation('kayke', 17, 69)

console.log(firstUser)

// 3 - campos readonly

class Car {
  name
  readonly wheels = 4
  constructor(name: string) {
    this.name = name
  }
}

const fusca = new Car('Fusca 99')

fusca.name = 'Honda civic 2022'

console.log(fusca)

//4 - Herença e super

class Machine {
  name
  constructor(name: string) {
    this.name = name
  }
}

const truck = new Machine('Truck')

class KillerMachine extends Machine {
  guns
  constructor(name: string, guns: number) {
    super(name)
    this.guns = guns
  }
}

const bigTruck = new KillerMachine('BigTruck', 6)

console.log(bigTruck)
console.log(truck)

// 5 - Métodos

class Dwarf {
  name
  constructor(name: string) {
    this.name = name
  }
  greeting() {
    console.log(`Hi, my name is ${this.name}`)
  }
}

const jimmy = new Dwarf('jimmy')

console.log(jimmy.name)
jimmy.greeting()

// 6 - This

class Truck {
  model
  hp
  constructor(model: string, hp: number) {
    this.model = model
    this.hp = hp
  }
  showDetailsByTruck() {
    console.log(`The model of truck is ${this.model} and your hp is ${this.hp}`)
    console.
      log(this)
  }
}

const newTruckRed = new Truck('Chevrolet Red', 345)

newTruckRed.showDetailsByTruck()

// 7 - getters

class Person {
  name
  surname
  constructor(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }
  get fullName() {
    return `The full name he is ${this.name} ${this.surname}`
  }
}

const kayke = new Person('kayke', 'simão')

console.log(kayke.fullName)

// 8 - setters

class Coords {
  X!: number
  Y!: number

  set FillX(X: number) {
    if (X === 0) {
      return
    }
    this.X = X
    console.log("X inserido com sucesso")
  }

  set FillY(Y: number) {
    if (Y === 0) {
      return
    }
    this.Y = Y
    console.log("Y inserido com sucesso")
  }

  get getCoords() {
    return `X: ${this.X} and Y: ${this.Y}`
  }
}

const myCoords = new Coords();
myCoords.X = 23
myCoords.Y = 12
console.log(myCoords)

myCoords.FillY = 234
myCoords.FillX = 32
console.log(myCoords.getCoords)

// 9 - Herença de interfaces

interface showTitle {
  itemTitle: () => string
  itemContent?: () => string
}

class blogPost implements showTitle {
  title
  constructor(title: string) {
    this.title = title
  }
  itemTitle() {
    return `The title is ${this.title}`
  }
}


const myOldBlog = new blogPost('difficulty in your carrer')
console.log(myOldBlog)


class AlotOfBlogs extends blogPost {
  contents
  constructor(title: string, contents: string[]) {
    super(title)
    this.contents = contents
  }
  itemContent(): string {
    const allContents = this.contents.map(item => item)
    return `Your contents are ${allContents}`
  }
}


const topics = ['Front-end', 'Back-end', 'Business']
const myNewsContentsBlog = new AlotOfBlogs('New tecnlogies', topics)

console.log(myNewsContentsBlog.itemTitle())
console.log(myNewsContentsBlog.itemContent())

// 10 - Override de métodos

class Base {
  someMethod() {
    return "Hello my friends"
  }
}

class Nova extends Base {
  someMethod(): string {
    return 'Hello, my name is kayke and i live with my parents and my sister.'
  }
}

const myObject = new Nova()

myObject.someMethod()

// 11 - visibilidade (visibile)

// 11 - Visibilidade - public

class C {
  public X = 10
}

class D extends C { }

const Cinstance = new C()
const Dinstance = new D()

console.log(Cinstance.X)
console.log(Dinstance.X)

// 12 - visibilidade - protected

class E {
  protected X = 123
  protected protectedMethod() {
    console.log('Esse método é protegido')
  }
}

class F extends E {
  showX() { return this.X }
  showProtectedMethod() { this.protectedMethod() }
}

const testProtected = new F()

testProtected.showX()
testProtected.showProtectedMethod()

// 13 visibilidade - private

class PrivateClass {
  private name = 'Andrew carnigie'
  showTheName(): string {
    return `the name is ${this.name}`
  }
}

const pObj = new PrivateClass()

console.log(pObj)

//14 - static members

class staticMembers {
  static prop = 'Teste de static'

  static statiMehtod() {
    console.log("This is method static")
  }
}

console.log(staticMembers.prop)
staticMembers.statiMehtod();

// 15 - Genric class

class Item<T, U> {
  first
  second
  constructor(first: T, second: U) {
    this.first = first
    this.second = second
  }

  get typeOfFirst() {
    return typeof this.first
  }

  get typeOfSecond() {
    return typeof this.second
  }
}

const listOfItemns = new Item('table', 10n)

console.log(listOfItemns)
console.log(listOfItemns.typeOfFirst)
console.log(listOfItemns.typeOfSecond)

// 16 - parameter properties

class ParamaterProperties {
  constructor(public name: string, private qty: number, private price: number) {
    this.name = name
    this.qty = qty
    this.price = price
  }

  showQty() {
    return this.qty
  }

  showPrice() {
    return this.price
  }
}

const newShirt = new ParamaterProperties('Shirt', 6, 12.50)

console.log(newShirt)
console.log(newShirt.name)
console.log(newShirt.showPrice())
console.log(newShirt.showQty())


// 17 - class expressions

const myClass = class <T> {
  name;
  constructor(name: T) {
    this.name = name
  }
}

const person = new myClass('kayke')

console.log(person)

// 18 - Abstract class

abstract class AbstractClass {
  abstract showName(): void
}

class AbstractExample extends AbstractClass {
  name: string
  constructor(name: string) {
    super()
    this.name = name
  }
  showName() {
    console.log(`The this person is ${this.name}'`)
  }
}

const newAbstractObject = new AbstractExample("Kayke simao")

newAbstractObject.showName()

// 19 - Realações entre classes

class Dog {
  name!: string
}

class Cat {
  name!: string
}

const doguinho: Dog = new Cat()