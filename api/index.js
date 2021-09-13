const express = require('express');
const app = express();
const config = require('config');
const NaoEncontrado = require('./erros/NaoEncontrado');
const CampoInvalido = require('./erros/CampoInvalido');
const DadosNaoEncontrados = require('./erros/DadosNaoEncontrados');

const port = config.get('api.port');

const router = require('./rotas/fornecedores');

app.use(express.json());

app.use('/api/fornecedores', router);

app.use((erro, req, res, proximo) => {
  let status = 500;

  if (erro instanceof NaoEncontrado) status(404);
  if (erro instanceof CampoInvalido || erro instanceof DadosNaoEncontrados) status(400);

  res.status(status);
  res.send(
    JSON.stringify({
      mensagem: erro.message,
      id: erro.idErro
    })
  );
});

app.listen(port, () => console.log(`A API está funcionando na porta ${port}`));
