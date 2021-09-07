const router = require('express').Router();
const TabelaFornecedor = require('./TabelaFornecedor');
const Fornecedor = require('./Fornecedor');

router.get('/', async (req, res) => {
  console.log(req.params);
  const resultados = await TabelaFornecedor.listar();
  res.status(200);
  res.send(
    JSON.stringify(resultados)
  );
});

router.post('/', async (req, res) => {
  try {
    const reciveData = req.body;
    const fornecedor = new Fornecedor(reciveData);
    await fornecedor.criar();
    res.send(201);
    res.send(
      JSON.stringify(fornecedor)
    );
  } catch (erro) {
    res.send(
      JSON.stringify({
        mensagem: erro.message
      })
    );
  }
});

router.get('/:idFornecedor', async (req, res) => {
  try {
    const id = req.params.idFornecedor;
    const fornecedor = new Fornecedor({ id });
    await fornecedor.carregar();
    res.send(200);
    res.send(
      JSON.stringify(fornecedor)
    );
  } catch (erro) {
    res.send(
      JSON.stringify({
        mensagem: erro.message
      })
    );
  }
});

router.put('/:idFornecedor', async (req, res) => {
  try {
    const id = req.params.idFornecedor;
    const receiveData = req.body;
    const data = Object.assign({}, receiveData, { id });
    const fornecedor = new Fornecedor(data);
    await fornecedor.atualizar();
    res.send(204);
    res.end();
  } catch (erro) {
    res.send(
      JSON.stringify({
        mensagem: erro.message
      })
    );
  }
});

router.delete('/:idFornecedor', async (req, res) => {
  try {
    const id = req.params.idFornecedor;
    const fornecedor = new Fornecedor({ id });
    await fornecedor.carregar();
    await fornecedor.remover();
    res.send(204);
    res.end();
  } catch (error) {
    res.send(
      JSON.stringify({
        mensagem: erro.message
      })
    );
  }
})

module.exports = router;
