require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB conectado com sucesso.");
  })
  .catch((erro) => {
    console.log("Erro ao conectar MongoDB:", erro);
  });

app.use("/livros", require("./routes/livros"));

app.get("/", (req, res) => {
  res.status(200).json({
    mensagem: "API de Livros funcionando."
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});