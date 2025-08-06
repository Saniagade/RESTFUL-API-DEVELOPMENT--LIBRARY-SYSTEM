const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: String,
  category: String,
  availableCopies: Number
});

module.exports = mongoose.model('Book', bookSchema);
