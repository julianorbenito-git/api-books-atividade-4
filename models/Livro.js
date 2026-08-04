const mongoose = require("mongoose");

const LivroSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: [true, "O título é obrigatório"],
      trim: true
    },
    autor: {
      type: String,
      required: [true, "O autor é obrigatório"],
      trim: true
    },
    anoPublicacao: {
      type: Number,
      required: [true, "O ano de publicação é obrigatório"]
    },
    genero: {
      type: String,
      required: [true, "O gênero é obrigatório"],
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Livro", LivroSchema);