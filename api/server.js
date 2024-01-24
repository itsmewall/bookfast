// Serve.js
const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 5000;

app.use(cors());

// Servir arquivos estáticos (HTML, CSS, JavaScript) da pasta booksfast/public
app.use(express.static(path.join(__dirname, '../booksfast/public')));

// Rota para fornecer dados de livros (lendo info.json)
app.get('/api/bookdata', (req, res) => {
    // Caminho absoluto para a pasta info
    const infoAbsPath = path.join(__dirname, 'info');
    const infoJsonPath = path.join(infoAbsPath, 'info.json');

    try {
        // Lê o conteúdo do info.json
        const infoJsonContent = fs.readFileSync(infoJsonPath, 'utf-8');
        const booksData = JSON.parse(infoJsonContent);

        res.json(booksData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao ler info.json');
    }
});

// Rota para servir o arquivo HTML principal da pasta booksfast/public
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../booksfast/public', 'index.html'));
});

// Rota para fornecer os arquivos PDF diretamente
app.get('/api/livros/:pdfFileName', (req, res) => {
    const pdfFileName = req.params.pdfFileName;
    const pdfFilePath = path.join(__dirname, 'livros', pdfFileName);

    // Verifica se o arquivo existe antes de fornecer
    if (fs.existsSync(pdfFilePath)) {
        // Define os cabeçalhos para indicar que é um arquivo PDF
        res.setHeader('Content-Type', 'application/pdf');
        res.sendFile(pdfFilePath);
    } else {
        res.status(404).send('Arquivo não encontrado');
    }
});

// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});
