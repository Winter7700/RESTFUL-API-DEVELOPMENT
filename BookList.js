import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books, onDelete }) => {
  return (
    <div>
      <h2>📚 All Books</h2>
      <Link to="/add">
        <button>Add New Book</button>
      </Link>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th><th>Author</th><th>Genre</th><th>Year</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.publishedYear}</td>
              <td>
                <Link to={`/edit/${book._id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => onDelete(book._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
