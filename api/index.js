const express = require('express');
const app = express();
const config = require('config');

const router = require('./rotas/fornecedores');

app.use(express.json());

app.use('/api/fornecedores', router)

app.listen(config.get('api.port'), () => console.log('A API está funcionando'));
