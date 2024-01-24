import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';

const PdfViewer = ({ pdfFileName, onClose }) => {
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/bookdata`);
        const booksData = await response.json();

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
    return null;
  }

  const pdfUrl = `http://localhost:5000/livros/${encodeURIComponent(bookData.title)}.pdf`;

  return (
    <div className="pdf-viewer">
      <button onClick={onClose}>Fechar PDF</button>
      <Document file={pdfUrl} onLoadSuccess={console.log}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PdfViewer;
