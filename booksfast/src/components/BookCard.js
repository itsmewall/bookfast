// BookCard.js
import React from 'react';
import '../styles/BookCard.css';
import PdfViewer from './PdfViewer';

const BookCard = ({ book }) => {
  return (
    <div className="card">
      <h3>{book.title}</h3>
      {book.author && <p>Autor: {book.author}</p>}
      {book.title && <PdfViewer title={book.title} />}
    </div>
  );
};

export default BookCard;
