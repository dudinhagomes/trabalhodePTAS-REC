const Produto = require('../models/Produto');

module.exports = {
  async criar(req, res) {
    try {
      const produto = await Produto.create(req.body);
      res.status(201).json(produto);
    } catch (erro) {
      res.status(400).json({ erro: 'Erro ao criar produto', detalhe: erro.message });
    }
  },

  async listarTodos(req, res) {
    const produtos = await Produto.find();
    res.json(produtos);
  },

  async buscarPorId(req, res) {
    const produto = await Produto.findById(req.params.id);
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json(produto);
  },

  async atualizar(req, res) {
    try {
      const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
      res.json(produto);
    } catch (erro) {
      res.status(400).json({ erro: 'Erro ao atualizar produto' });
    }
  },

  async deletar(req, res) {
    const produto = await Produto.findByIdAndDelete(req.params.id);
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json({ mensagem: 'Produto removido com sucesso' });
  }
};