import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookCard from './BookCard';
import '../styles/BookList.css';

const BookList = () => {
  const [book, setBook] = useState({ titulo: '', capitulos: [] });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/bookdata');
        const bookData = await response.json();

        if (bookData.livro) {
          setBook(bookData.livro);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="book-list">
      <BookCard book={book} navigate={navigate} />
    </div>
  );
};

export default BookList;