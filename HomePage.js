import React, { useEffect, useState } from 'react';
import { getBooks, deleteBook } from '../services/api';
import BookList from '../components/BookList';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    const res = await getBooks();
    setBooks(res.data);
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    loadBooks();
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return <BookList books={books} onDelete={handleDelete} />;
};

export default HomePage;
