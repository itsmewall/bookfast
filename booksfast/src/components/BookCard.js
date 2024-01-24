import React from 'react';
import '../styles/BookCard.css';
import Pdfviewer from './Pdfviewer';

const BookCard = ({ book }) => {
  return (
    <div className="card">
      <h3>{book.title}</h3>
      {book.author && <p>Autor: {book.author}</p>}
      {book.pdfFileName && <Pdfviewer pdfFileName={book.pdfFileName} />}
    </div>
  );
};

export default BookCard;
