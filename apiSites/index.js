const express = require('express');
const app = express();

const sitesAcessados = [];

app.use(express.json());

app.get('/api/sites', (req, res) => {
  res.send(JSON.stringify(sitesAcessados));
});

app.post('/api/sites', (req, res) => {
  if (!req.body.url || !req.body.dataDeAcesso) {
    res.status(400);
    res.send(JSON.stringify({
      mensagem: 'Os campos "url" e "dataDeAcesso" são obrigatórios e não podem estar vazios'
    }));
    res.end();
    return
  }

  const site = {
    url: req.body.url,
    dataDeAcesso: req.body.dataDeAcesso
  }

  sitesAcessados.push(site);
  res.status(201);
  res.send(JSON.stringify(site));

});

app.listen(3003, () => console.log('API de Historico de Navegação'));
