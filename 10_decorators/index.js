"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//1 - exemplo de decorators
function myDecorator() {
    console.log("Iniciando decorator");
    return function (target, property, descriptor) {
        console.log("executando decorator");
        console.log(target);
        console.log(property);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log("Terminando exucução do método");
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
// 2 - multiplos decorators
function a() {
    return function (target, property, descriptor) { };
    console.log("Executou a.");
}
class MultipleDecorators {
    testing() {
        console.log("Terminado execução");
    }
}
__decorate([
    a()
], MultipleDecorators.prototype, "testing", null);
// 3 -class decorator
const classDec = (constructor) => {
    if (constructor.name === "User") {
        console.log("Criando usuario!");
    }
};
let User = class User {
    name;
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const Camila = new User("Camila");
console.log(Camila.name);
// 4 - method decorator
function enumerable(value) {
    return function (target, property, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    name;
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da máquina é ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator.showName());
// 5 - acess decorator
class Monster {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `name of monster ${this.name}`;
    }
    get showAge() {
        return `Age of monster is ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(true)
], Monster.prototype, "showAge", null);
const charmander = new Monster("Charmander", 3);
console.log(charmander);
// 6 - property
function formatNumber() {
    return function (target, PropertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, PropertyKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    id;
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID("1");
console.log(newItem);
const i = ["oi"];
i.map((i) => i);
// 7 exemplo real: class decorator
function createDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    id;
    createdAt;
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createDate
], Book);
let Pen = class Pen {
    id;
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createDate
], Pen);
const newBook = new Book(23);
const pen = new Book(4);
console.log(newBook);
console.log(pen.createdAt);
// 8 - exemplo real com method decorator
function checkIfUserPoster() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Usuario já postou!");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    alreadyPosted = false;
    // @checkIfUserPoster();
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post of user ${content}`);
    }
}
const newPost = new Post();
newPost.post("My first post!", newPost.alreadyPosted);
// 9 - example property decorators
function Max(limit) {
    return function (target, PropertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log("The value must be at most " + limit + "digitos");
            }
            else {
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
    username;
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
const pedro = new Admin('pedrojjjjjjjjjjjjjjj');
