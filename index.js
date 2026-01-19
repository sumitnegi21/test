// Initial buggy code
const express = require('express');
const app = express();
app.use(express.json());

app.get('/todo', (req, res) => {
    res.send('Get all todos');
});

app.post('/todo', (req, res) => {
    res.send('Add a new todo');
});

app.put('/todo/:id', (req, res) => {
    res.send('Update a todo');
});

app.delete('/todo/:id', (req, res) => {
    res.send('Delete a todo');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});