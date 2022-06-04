import express, { NextFunction, Request, response, Response } from "express";

const app = express();

//  3 - rota com POST

app.use(express.json());

// 11 - middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
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
  } else if (req.method === "GET") {
    return res.send("Leu algum registro ");
  } else {
    res.send("Nao podemos realizar esta operação!");
  }
});

// 5 - interface do express
app.get("/api/interfaces", (req: Request, res: Response) => {
  return res.send("Utilizando interface");
});

// 6 - enviando JSON
app.get("/api/json", (req: Request, res: Response) => {
  return res.json({
    name: "Shirt",
    price: 30.0,
    color: "blue",
  });
});

// 7 - router parameter

app.get("/api/product/:id", (req: Request, res: Response) => {
  console.log(req.params);

  const id = req.params.id;

  if (id === "1") {
    const product = {
      id: 1,
      name: "Boné",
      price: 50,
    };
    return res.json(product);
  } else {
    return res.send("Produto não comprado");
  }
});

// 8 rotas complexas

app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
  console.log(req.params);

  const productId = req.params.id;
  const reviewId = req.params.reviewId;

  return res.send(`Acessando a review ${reviewId} do produto ${productId}`);
});

//  9 - router handler
const getUser = (req: Request, res: Response) => {
  console.log(`Resgatando o usuário com id: ${req.params.id}`);

  return res.send("O usuario foi encontrado!");
};

app.get("/api/user/:id", getUser);

// 10 - middleware

function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === "1") {
    console.log("Pode seguir");
    next();
  } else {
    console.log("Acesso restrito!");
  }
}

app.get("/api/user/:id/acess", checkUser, (req: Request, res: Response) => {
  return res.json({ msg: "Bem vindo a área adiministrativa" });
});

// 12 - req e res com generics

app.get(
  "/api/user/:id/details/:name",
  (
    req: Request<{ id: string; name: string }>,
    res: Response<{ status: boolean }>
  ) => {
    console.log(`ID: ${req.params.id}`);
    console.log(`Name: ${req.params.name}`);

    return res.json({ status: true });
  }
);

// 13 - tratando erros

app.get("/api/error", (req: Request, res: Response) => {
  try {
    throw new Error("Algo deu errado");
  } catch (error:any) {
    res.statusCode = 500;
    res.json({ msg: error.message });
  }
});

app.listen(3000, () => {
  console.log("Aplicação de TS + express funcionando");
});
