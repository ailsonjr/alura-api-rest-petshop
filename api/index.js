const express = require('express');
const app = express();
const config = require('config');
const NaoEncontrado = require('./erros/NaoEncontrado');

const port = config.get('api.port');

const router = require('./rotas/fornecedores');

app.use(express.json());

app.use('/api/fornecedores', router);

app.use((erro, req, res, proximo) => {
  if (erro instanceof NaoEncontrado) {
    res.status(404);
  } else {
    res.send(400);
  }
  res.send(
    JSON.stringify({
      mensagem: erro.message,
      id: erro.idErro
    })
  );
});

app.listen(port, () => console.log(`A API está funcionando na porta ${port}`));
