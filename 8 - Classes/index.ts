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