import React from 'react';
import '../styles/BookCard.css';

const BookCard = ({ chapter }) => {
  if (!chapter || !chapter.titulo) {
    return null;
  }

  return (
    <div className="book-card">
      <h3>{chapter.titulo}</h3>
      <p>{chapter.conteudo}</p>
    </div>
  );
};

export default BookCard;