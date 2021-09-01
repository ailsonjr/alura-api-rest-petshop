const express = require('express');
const app = express();
const config = require('config');

const port = config.get('api.port');

const router = require('./rotas/fornecedores');

app.use(express.json());

app.use('/api/fornecedores', router);

app.listen(port, () => console.log(`A API está funcionando na porta ${port}`));
