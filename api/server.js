const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

// Servir arquivos estáticos (HTML, CSS, JavaScript) da pasta booksfast/public
app.use(express.static(path.join(__dirname, '../booksfast/public')));

// Servir arquivos PDF da pasta livros
const livrosPath = path.join(__dirname, 'livros');
app.use('/livros', express.static(livrosPath));

// Rota para fornecer dados de livros (simulando uma API)
app.get('/api/bookdata', (req, res) => {
    const booksData = [
        { id: 1, title: "Livro 1", author: "Autor 1", pdfFileName: "livro1.pdf" },
        { id: 2, title: "Livro 2", author: "Autor 2", pdfFileName: "livro2.pdf" },
        { id: 3, title: "Livro 3", author: "Autor 3", pdfFileName: "livro3.pdf" },
        // Adicione mais livros conforme necessário
    ];

    res.json(booksData);
});

// Rota para servir o arquivo HTML principal da pasta booksfast/public
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../booksfast/public', 'index.html'));
});

// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});
