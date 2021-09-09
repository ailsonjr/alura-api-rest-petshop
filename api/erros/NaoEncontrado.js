class NaoEncontrado extends Error {
  constructor() {
    super('Não foi encontrado!');
    this.name = NaoEncontrado;
    this.idErro = 0;
  }
}

module.exports = NaoEncontrado;
