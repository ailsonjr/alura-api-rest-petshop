const Modelo = require('./ModeloTabelaFornecedor');

module.exports = {
  listar() {
    return Modelo.findAll();
  },

  inserir(fornecedor) {
    return Modelo.create(fornecedor);
  },

  async pegarPorId(id) {
    const encontrado = await Modelo.findOne({ where: { id } });
    if (!encontrado) throw new Error('Fornecedor não encontrado');
    return encontrado;
  },

  atualizar(id, dataToUpdate) {
    return Modelo.update(dataToUpdate, { where: { id } });
  }
};
