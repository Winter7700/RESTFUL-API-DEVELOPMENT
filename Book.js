const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  genre: String,
  publishedYear: Number
});

module.exports = mongoose.model('Book', BookSchema);
