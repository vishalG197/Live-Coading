// index.js
const express = require('express');
const app = express();
const port = 8080;

// Middleware
app.use(express.json());

// Dummy Data - Replace this with a database later
let books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
];

// Routes
app.get('/books', (req, res) => {
  res.json(books);
});

app.post('/books', (req, res) => {
  const { id, title, author } = req.body;
  const newBook = { id, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;
  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex !== -1) {
    books[bookIndex] = { id: bookId, title, author };
    res.json(books[bookIndex]);
  } else {
    res.status(404).json({ message: 'Book not found.' });
  }
});

app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter((book) => book.id !== bookId);
  res.sendStatus(204);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
