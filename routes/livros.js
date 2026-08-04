const express = require("express");
const router = express.Router();
const Livro = require("../models/Livro");


// GET - Listar todos os livros
router.get("/", async (req, res) => {
  try {
    const livros = await Livro.find();

    res.status(200).json(livros);

  } catch (error) {

    res.status(500).json({
      mensagem: "Erro interno do servidor."
    });

  }
});


// POST - Cadastrar livro
router.post("/", async (req, res) => {

  const { titulo, autor, anoPublicacao, genero } = req.body;

  if (!titulo || !autor || !anoPublicacao || !genero) {

    return res.status(400).json({
      mensagem: "Todos os campos são obrigatórios."
    });

  }

  try {

    const livro = await Livro.create({
      titulo,
      autor,
      anoPublicacao,
      genero
    });

    res.status(201).json(livro);

  } catch (error) {

    res.status(500).json({
      mensagem: "Erro ao cadastrar livro."
    });

  }
});


// PUT - Atualizar livro
router.put("/:id", async (req, res) => {

  try {

    const livro = await Livro.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!livro) {

      return res.status(404).json({
        mensagem: "Livro não encontrado."
      });

    }

    res.status(200).json(livro);

  } catch (error) {

    res.status(500).json({
      mensagem: "Erro ao atualizar livro."
    });

  }
});


// DELETE - Excluir livro
router.delete("/:id", async (req, res) => {

  try {

    const livro = await Livro.findByIdAndDelete(req.params.id);

    if (!livro) {

      return res.status(404).json({
        mensagem: "Livro não encontrado."
      });

    }

    res.status(200).json({
      mensagem: "Livro excluído com sucesso."
    });

  } catch (error) {

    res.status(500).json({
      mensagem: "Erro ao excluir livro."
    });

  }

});

module.exports = router;
