const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the Bookstore!');
});

// CRUD operations for books
app.post('/books', (req, res) => {
  // Add a book
  res.status(201).send('Book added');
});

app.get('/books', (req, res) => {
  // Get all books
  res.send('All books');
});

app.get('/books/:id', (req, res) => {
  // Get a single book by id
  res.send(`Book ${req.params.id}`);
});

app.put('/books/:id', (req, res) => {
  // Update a book by id
  res.send(`Book ${req.params.id} updated`);
});

app.delete('/books/:id', (req, res) => {
  // Delete a book by id
  res.send(`Book ${req.params.id} deleted`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});