import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import '../styles/BookList.css';

const BookList = () => {
  const [book, setBook] = useState({ livro: { titulo: '', autor: '', capitulos: [] } });
  const [showChapters, setShowChapters] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/bookdata');
        const bookData = await response.json();

        if (bookData.livro) {
          setBook(bookData);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (clickedBook) => {
    // Ao clicar no card, exibe ou esconde os capítulos
    setShowChapters(!showChapters);
  };

  return (
    <div className="book-list">
   
      <BookCard book={book.livro} onCardClick={handleCardClick} />
      {showChapters && book.livro.capitulos && book.livro.capitulos.map((chapter) => (
        <div key={chapter.titulo} className="chapter">
          <h4>{chapter.titulo}</h4>
          <p>{chapter.conteudo}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
