const Book = require('../models/Book');

// Create a book
exports.createBook = async (req, res) => {
  const book = new Book(req.body);
  const saved = await book.save();
  res.status(201).json(saved);
};

// Get all books
exports.getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// Get single book
exports.getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.json(book);
};

// Update book
exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
};

// Delete book
exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};
