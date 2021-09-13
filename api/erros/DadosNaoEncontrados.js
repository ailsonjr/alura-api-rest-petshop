class DadosNaoEncontrados extends Error {
  constructor(campo) {
    super('Não foram fornecidos dados para atualizar');
    this.name = 'DadosNaoEncontrados';
    this.idErro = 2;
  }
}

module.exports = DadosNaoEncontrados;
