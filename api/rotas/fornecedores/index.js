const router = require('express').Router();
const TabelaFornecedor = require('./TabelaFornecedor');
const Fornecedor = require('./Fornecedor');

router.get('/', async (req, res) => {
  console.log(req.params);
  const resultados = await TabelaFornecedor.listar();
  res.send(
    JSON.stringify(resultados)
  );
});

router.post('/', async (req, res) => {
  const reciveData = req.body;
  const fornecedor = new Fornecedor(reciveData);
  await fornecedor.criar();
  res.send(
    JSON.stringify(fornecedor)
  );
});

router.get('/:idFornecedor', async (req, res) => {
  try {
    const id = req.params.idFornecedor;
    const fornecedor = new Fornecedor({ id });
    await fornecedor.carregar();
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

module.exports = router;
