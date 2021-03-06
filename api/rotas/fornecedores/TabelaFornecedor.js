const { removeAllListeners } = require('nodemon');
const Modelo = require('./ModeloTabelaFornecedor');
const NaoEncontrado = require('../../erros/NaoEncontrado');

module.exports = {
  listar() {
    return Modelo.findAll();
  },

  inserir(fornecedor) {
    return Modelo.create(fornecedor);
  },

  async pegarPorId(id) {
    const encontrado = await Modelo.findOne({ where: { id } });
    if (!encontrado) throw new NaoEncontrado();
    return encontrado;
  },

  atualizar(id, dataToUpdate) {
    return Modelo.update(dataToUpdate, { where: { id } });
  },

  remover(id) {
    return Modelo.destroy({ where: { id } })
  }
};
