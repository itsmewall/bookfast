// Em BookList.js
import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import '../styles/BookList.css';

const BookList = () => {
  const [book, setBook] = useState({ livro: { titulo: '', capitulos: [] } });

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

  return (
    <div className="book-list">
      <h2>{book.livro.titulo}</h2>
      {book.livro.capitulos && book.livro.capitulos.map((chapter) => (
        <BookCard key={chapter.titulo} chapter={chapter} />
      ))}
    </div>
  );
};

export default BookList;
