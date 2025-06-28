import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createBook, updateBook, getBook } from '../services/api';
import BookForm from '../components/BookForm';

const AddEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    if (id) {
      getBook(id).then(res => setBookData(res.data));
    }
  }, [id]);

  const handleSubmit = async (formData) => {
    if (id) {
      await updateBook(id, formData);
    } else {
      await createBook(formData);
    }
    navigate('/');
  };

  return <BookForm initialData={bookData} onSubmit={handleSubmit} />;
};

export default AddEditPage;
