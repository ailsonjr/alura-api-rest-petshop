const express = require('express');
const app = express();

app.use(express.json());

const jogosFavoritos = [];

app.post('/api/jogos', (req, res) => {
  try {
    if (!req.body.nome || !req.body.plataforma) {
      throw new Error('Campos inválidos!');
    }

    jogosFavoritos.push(req.body);
    res.send(JSON.stringify(req.body));
  } catch (erro) {
    res.send(JSON.stringify({ mensagem: erro.message }));
  }
});

app.get('/api/jogos', (req, res) => {
  res.send(JSON.stringify(jogosFavoritos));
});

app.listen(3002, () => console.log('API de jogos'));
