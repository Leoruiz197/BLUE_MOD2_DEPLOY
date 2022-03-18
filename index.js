const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/jogos", function (req, res) {
    res.send("Aba de jogos");
});

app.get("/filmes", function (req, res) {
    res.send("Aba de filmes");
});
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));