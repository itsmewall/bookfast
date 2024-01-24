const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 5000;

app.use(cors());

// Servir arquivos estáticos da pasta 'livros'
app.use(express.static(path.join(__dirname, 'livros')));

// Rota para obter dados do livro
app.get('/api/bookdata', (req, res) => {
    const livroJsonPath = path.join(__dirname, 'livros', 'livro.json');
  
    try {
      const livroJsonContent = fs.readFileSync(livroJsonPath, 'utf-8');
      const livroData = JSON.parse(livroJsonContent);
  
      res.json(livroData); // Removendo a chave "livro"
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao ler livro.json');
    }
  });
  
// Rota para obter resumos dos capítulos
app.get('/api/resumos/:capitulo', (req, res) => {
  const capitulo = req.params.capitulo;
  const resumosJsonPath = path.join(__dirname, 'livros', `${capitulo.toLowerCase()}.json`);

  try {
    const resumosJsonContent = fs.readFileSync(resumosJsonPath, 'utf-8');
    const resumosData = JSON.parse(resumosJsonContent);

    res.json(resumosData);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Erro ao ler ${capitulo.toLowerCase()}.json`);
  }
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
