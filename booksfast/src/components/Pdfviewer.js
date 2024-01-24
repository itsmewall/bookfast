import React, { useEffect, useState } from 'react';

const PdfViewer = ({ pdfFileName }) => {
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/bookdata');
        const booksData = await response.json();
        
        // Encontrar o livro com base no pdfFileName
        const matchingBook = booksData.find(book => book.pdfFileName === pdfFileName);

        if (matchingBook) {
          setBookData(matchingBook);
        } else {
          console.error(`Livro não encontrado para pdfFileName: ${pdfFileName}`);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookData();
  }, [pdfFileName]);

  if (!bookData) {
    return null; // Pode exibir um indicador de carregamento aqui se necessário
  }

  const pdfUrl = `http://localhost:5000/livros/${encodeURIComponent(bookData.title)}.pdf`;

  return (
    <object data={pdfUrl} type="application/pdf" width="100%" height="500">
      <p>Seu navegador não suporta visualização de PDF. Você pode baixá-lo <a href={pdfUrl}>aqui</a>.</p>
    </object>
  );
};

export default PdfViewer;
