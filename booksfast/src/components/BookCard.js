import React from 'react';
import '../styles/BookCard.css';

const BookCard = ({ book, navigate }) => {
  if (!book || !book.titulo) {
    return null;
  }

  const handleCardClick = () => {
    navigate(`/resumos/${encodeURIComponent(book.titulo)}`);
  };

  return (
    <div className="book-card" onClick={handleCardClick}>
      <h3>{book.titulo}</h3>
      <p>Autor: {book.autor}</p>
    </div>
  );
};

export default BookCard;
