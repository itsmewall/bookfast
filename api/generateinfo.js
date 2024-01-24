const fs = require('fs');
const path = require('path');

// Caminho absoluto para a pasta info
const infoAbsPath = path.join(__dirname, 'info');

// Caminho absoluto para a pasta livros
const livrosAbsPath = path.join(__dirname, 'livros');

// Lê os nomes dos arquivos na pasta /livros
fs.readdir(livrosAbsPath, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    // Cria a lista de dados dos livros com base nos nomes dos arquivos
    const booksData = files.map((file, index) => ({
        id: index + 1,
        title: path.parse(file).name,  // Usar o nome do arquivo sem extensão como título
        author: `Autor ${index + 1}`,
        pdfFileName: file,
        pdfPath: path.join(livrosAbsPath, file),
    }));

    // Criar o conteúdo do info.json
    const infoJsonContent = JSON.stringify(booksData, null, 2);

    // Criar a pasta info se não existir
    if (!fs.existsSync(infoAbsPath)) {
        fs.mkdirSync(infoAbsPath);
    }

    // Escrever o conteúdo no arquivo info.json
    fs.writeFileSync(path.join(infoAbsPath, 'info.json'), infoJsonContent);

    console.log('info.json gerado com sucesso!');
});
