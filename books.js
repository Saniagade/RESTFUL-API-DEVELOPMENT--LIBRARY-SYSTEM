const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Create a book
router.post('/', async (req, res) => {
  try {
    const book = new Book(req.body);
    const saved = await book.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//  Get all books
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

//  Get one book by ID
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch {
    res.status(400).json({ message: 'Invalid ID' });
  }
});

//  Update book by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//  Delete book by ID
router.delete('/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted' });
  } catch (error) {
    res.status(400).json({ error: 'Delete failed' });
  }
});

module.exports = router;
