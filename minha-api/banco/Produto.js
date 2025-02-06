const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  marca: { type: String, required: true },
  preco: { type: Number, required: true, min: 0 },
  estoque: { type: Number, default: 0 },
  categoria: { type: String, required: true },
  imagem: { type: String, required: true }
});

module.exports = mongoose.model('Produto', ProdutoSchema);