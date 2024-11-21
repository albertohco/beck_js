import express from "express";

const posts = [
  {
    id: 1,
    descrição: "Uma foto teste",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descrição: "Gato curioso observando a janela",
    imagem: "https://placekitten.com/400/200",
  },
  {
    id: 3,
    descrição: "Dois gatinhos brincando com um novelo de lã",
    imagem: "https://placekitten.com/600/300",
  },
  {
    id: 4,
    descrição: "Gatinho ronronando em uma cesta",
    imagem: "https://placekitten.com/300/200",
  },
  {
    id: 5,
    descrição: "Um gato faminto devorando sua ração",
    imagem: "https://placekitten.com/200/300",
  },
  {
    id: 6,
    descrição: "Explorando a caixa de papelão",
    imagem: "https://placekitten.com/500/250",
  },
  {
    id: 7,
    descrição: "Um sorriso felino contagiante",
    imagem: "https://placecats.com/felix/300/150",
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando...");
});

app.get("/", (req, res) => {
  res.status(200).send("Boas vindas à imersão...");
});

app.get("/sobre", (req, res) => {
  res.send(
    "Bem-vindo ao meu servidor Express! Aqui você encontrará informações sobre o projeto."
  );
});

app.get("/contato", (req, res) => {
  res.json({
    email: "seuemail@exemplo.com",
    telefone: "(11) 1234-5678",
  });
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostID(id) {
  return posts.findIndex((posts) => {
    return posts.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostID(req.params.id);
  res.status(200).json(posts[index]);
});

function buscarPostKeyword(keyword) {
  return posts.filter((posts) => {
    return posts.descrição.toLowerCase().includes(keyword);
  });
}

// Rota para buscar posts por palavra-chave
app.get("/posts/search/:keyword", (req, res) => {
  const filteredPosts = buscarPostKeyword(req.params.keyword.toLowerCase());
  res.status(200).json(filteredPosts);
});
