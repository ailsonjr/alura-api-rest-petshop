const TabelaFornecedor = require('./TabelaFornecedor');

class Fornecedor {
  constructor({ id, empresa, email, categoria, dataCriacao, dataAtualizacao, versao }) {
    this.id = id
    this.empresa = empresa
    this.email = email
    this.categoria = categoria
    this.dataCriacao = dataCriacao
    this.dataAtualizacao = dataAtualizacao
    this.versao = versao
  };

  async criar() {
    this.validar();
    const resultado = await TabelaFornecedor.inserir({
      empresa: this.empresa,
      email: this.email,
      categoria: this.categoria
    });

    this.id = resultado.id
    this.dataCriacao = resultado.dataCriacao
    this.dataAtualizacao = resultado.dataAtualizacao
    this.versao = resultado.versao
  };

  async carregar() {
    const encontrado = await TabelaFornecedor.pegarPorId(this.id);
    this.empresa = encontrado.empresa;
    this.email = encontrado.email;
    this.categoria = encontrado.categoria;
    this.dataCriacao = encontrado.dataCriacao;
    this.dataAtualizacao = encontrado.dataAtualizacao;
    this.versao = encontrado.versao;
  }

  async atualizar() {
    await TabelaFornecedor.pegarPorId(this.id);
    const fields = ['empresa', 'email', 'categoria'];
    const dataToUpdate = {};

    fields.forEach((field) => {
      const value = this[field];
      if (typeof value === 'string' && value.length > 0) {
        dataToUpdate[field] = value;
      }

      if (Object.keys(dataToUpdate).length === 0) {
        throw new Error('Não foram fornecidos dados para atualizar');
      }

      TabelaFornecedor.atualizar(this.id, dataToUpdate);
    });
  }

  remover() {
    return TabelaFornecedor.remover(this.id)
  }

  validar() {
    const fields = ['empresa', 'email', 'categoria'];

    fields.forEach(field => {
      const value = this[field];

      if (typeof value !== 'string' || value.length === 0) {
        throw new Error(`O campo '${field} está inválido'`)
      }
    });

  }
}

module.exports = Fornecedor;
