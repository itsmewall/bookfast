import React from 'react';
import '../styles/BookCard.css';

const BookCard = ({ book, onCardClick }) => {
  if (!book || !book.titulo) {
    return null;
  }

  return (
    <div className="book-card" onClick={() => onCardClick(book)}>
      <h3>{book.titulo}</h3>
      <p>Autor: {book.autor}</p>
    </div>
  );
};

export default BookCard;
