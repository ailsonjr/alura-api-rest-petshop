const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/filmes', (req, res) => {
  const filmes = [
    { nome: 'Os Vingadores 3' },
    { nome: 'Destacamento Blood' },
    { nome: 'Pantera Negra' }
  ];

  res.send(JSON.stringify(filmes));
});

app.listen(3001, () => console.log('API de filmes funcionando'));
