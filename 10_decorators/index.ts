//1 - exemplo de decorators
function myDecorator() {
  console.log("Iniciando decorator");
  return function (
    target: any,
    property: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executando decorator");
    console.log(target);
    console.log(property);
    console.log(descriptor);
  };
}

class myClass {
  @myDecorator()
  testing() {
    console.log("Terminando exucução do método");
  }
}

const myObj = new myClass();

myObj.testing();

// 2 - multiplos decorators

function a() {
  return function (
    target: any,
    property: string,
    descriptor: PropertyDescriptor
  ) {};
  console.log("Executou a.");
}

class MultipleDecorators {
  @a()
  testing() {
    console.log("Terminado execução");
  }
}

// 3 -class decorator

const classDec = (constructor: Function) => {
  if (constructor.name === "User") {
    console.log("Criando usuario!");
  }
};
@classDec
class User {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

const Camila = new User("Camila");
console.log(Camila.name);

// 4 - method decorator

function enumerable(value: boolean) {
  return function (
    target: any,
    property: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Machine {
  name;
  constructor(name: string) {
    this.name = name;
  }

  @enumerable(false)
  showName() {
    console.log(this);
    return `O nome da máquina é ${this.name}`;
  }
}

const trator = new Machine("Trator");
console.log(trator.showName());

// 5 - acess decorator

class Monster {
  name?;
  age?;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @enumerable(true)
  get showName() {
    return `name of monster ${this.name}`;
  }
  @enumerable(true)
  get showAge() {
    return `Age of monster is ${this.age}`;
  }
}

const charmander = new Monster("Charmander", 3);
console.log(charmander);

// 6 - property

function formatNumber() {
  return function (target: Object, PropertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      value = newVal.padStart(5, "0");
    };

    Object.defineProperty(target, PropertyKey, {
      set: setter,
      get: getter,
    });
  };
}

class ID {
  @formatNumber()
  id;
  constructor(id: string) {
    this.id = id;
  }
}

const newItem = new ID("1");
console.log(newItem);

const i = ["oi"];

i.map((i) => i);

// 7 exemplo real: class decorator

function createDate(created: Function) {
  created.prototype.createdAt = new Date();
}

@createDate
class Book {
  id;
  createdAt?: Date;
  constructor(id: number) {
    this.id = id;
  }
}

@createDate
class Pen {
  id;
  constructor(id: number) {
    this.id = id;
  }
}

const newBook = new Book(23);
const pen = new Book(4);

console.log(newBook);
console.log(pen.createdAt);

// 8 - exemplo real com method decorator

function checkIfUserPoster() {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    console.log(childFunction);
    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log("Usuario já postou!");
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    };
    return descriptor;
  };
}

class Post {
  alreadyPosted = false;

  // @checkIfUserPoster();
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`Post of user ${content}`);
  }
}

const newPost = new Post();
newPost.post("My first post!", newPost.alreadyPosted);

// 9 - example property decorators

function Max(limit: number) {
  return function (target: Object, PropertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      if (newVal.length > limit) {
        console.log("The value must be at most " + limit + "digitos");
      } else {
        return (value = newVal);
      }
    };
    Object.defineProperty(target, PropertyKey, {
      set: setter,
      get: getter,
    });
  };
}

class Admin {
  @Max(10)
  username;
  constructor(username: string) {
    this.username = username;
  }
}

const pedro = new Admin('pedrojjjjjjjjjjjjjjj')