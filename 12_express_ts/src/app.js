"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//  3 - rota com POST
app.use(express_1.default.json());
// 11 - middleware para todas as rotas
function showPath(req, res, next) {
    console.log(req.path);
    next();
}
app.use(showPath);
app.get("/", (req, res) => {
    return res.send("Hello world");
});
//  3 -rota com POST
app.post("/api/product", (req, res) => {
    console.log(req.body);
    return res.send("Produto adicionado!");
});
// 4 - rotas para todos os verbos
app.all("/api/product/check", (req, res) => {
    // req.method === VERBO http
    if (req.method === "POST") {
        return res.send("Inseriu algum registro");
    }
    else if (req.method === "GET") {
        return res.send("Leu algum registro ");
    }
    else {
        res.send("Nao podemos realizar esta operação!");
    }
});
// 5 - interface do express
app.get("/api/interfaces", (req, res) => {
    return res.send("Utilizando interface");
});
// 6 - enviando JSON
app.get("/api/json", (req, res) => {
    return res.json({
        name: "Shirt",
        price: 30.0,
        color: "blue",
    });
});
// 7 - router parameter
app.get("/api/product/:id", (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    if (id === "1") {
        const product = {
            id: 1,
            name: "Boné",
            price: 50,
        };
        return res.json(product);
    }
    else {
        return res.send("Produto não comprado");
    }
});
// 8 rotas complexas
app.get("/api/product/:id/review/:reviewId", (req, res) => {
    console.log(req.params);
    const productId = req.params.id;
    const reviewId = req.params.reviewId;
    return res.send(`Acessando a review ${reviewId} do produto ${productId}`);
});
//  9 - router handler
const getUser = (req, res) => {
    console.log(`Resgatando o usuário com id: ${req.params.id}`);
    return res.send("O usuario foi encontrado!");
};
app.get("/api/user/:id", getUser);
// 10 - middleware
function checkUser(req, res, next) {
    if (req.params.id === "1") {
        console.log("Pode seguir");
        next();
    }
    else {
        console.log("Acesso restrito!");
    }
}
app.get("/api/user/:id/acess", checkUser, (req, res) => {
    return res.json({ msg: "Bem vindo a área adiministrativa" });
});
// 12 - req e res com generics
app.get("/api/user/:id/details/:name", (req, res) => {
    console.log(`ID: ${req.params.id}`);
    console.log(`Name: ${req.params.name}`);
    return res.json({ status: true });
});
// 13 - tratando erros
app.get("/api/error", (req, res) => {
    try {
        throw new Error("Algo deu errado");
    }
    catch (error) {
        res.statusCode = 500;
        res.json({ msg: error.message });
    }
});
app.listen(3000, () => {
    console.log("Aplicação de TS + express funcionando");
});
