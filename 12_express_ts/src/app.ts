import express, { Request, Response } from "express";

const app = express();

//  3 - rota com POST

app.use(express.json());

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
  } else if (req.method === "GET") {
    return res.send("Leu algum registro ");
  } else {
    res.send("Nao podemos realizar esta operação!");
  }
});

// 5 - interface do express
app.get("/api/interfaces", (req: Request, res: Response) => {
  return res.send("Utilizando interface")
});

app.listen(3000, () => {
  console.log("Aplicação de TS + express funcionando");
});