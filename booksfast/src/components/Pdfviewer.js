import React from 'react';

const Pdfviewer = ({ pdfFileName }) => {
  const pdfUrl = `http://localhost:5000/livros/${pdfFileName}`;

  return (
    <object data={pdfUrl} type="application/pdf" width="100%" height="500">
      <p>Seu navegador não suporta visualização de PDF. Você pode baixá-lo <a href={pdfUrl}>aqui</a>.</p>
    </object>
  );
};

export default Pdfviewer;
