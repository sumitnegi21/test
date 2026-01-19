const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let books = [];

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

app.post('/books', (req, res) => {
    const book = req.body;
    book.id = books.length + 1;
    books.push(book);
    res.status(201).send(book);
});

app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const index = books.findIndex(b => b.id == id);
    if (index === -1) {
        return res.status(404).send('Book not found');
    }
    const updatedBook = { ...books[index], ...req.body };
    books[index] = updatedBook;
    res.status(200).send(updatedBook);
});

app.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    const index = books.findIndex(b => b.id == id);
    if (index === -1) {
        return res.status(404).send('Book not found');
    }
    books.splice(index, 1);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
