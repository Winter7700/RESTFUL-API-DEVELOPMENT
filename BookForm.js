import React, { useState, useEffect } from 'react';

const BookForm = ({ initialData, onSubmit }) => {
  const [form, setForm] = useState({ title: '', author: '', genre: '', publishedYear: '' });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialData ? 'Edit Book' : 'Add Book'}</h2>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required /><br />
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} /><br />
      <input name="genre" placeholder="Genre" value={form.genre} onChange={handleChange} /><br />
      <input name="publishedYear" type="number" placeholder="Year" value={form.publishedYear} onChange={handleChange} /><br />
      <button type="submit">Save</button>
    </form>
  );
};

export default BookForm;
