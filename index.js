// Initial buggy code
const express = require('express');
const app = express();

app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

app.post('/todo', (req, res) => {
  const { title, completed = false } = req.body;
  if (!title) {
    return res.status(400).send('Title is required');
  }
  const newTodo = { id: todos.length + 1, title, completed };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/todo/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const todo = todos.find(t => t.id === parseInt(id));
  if (!todo) {
    return res.status(404).send('Todo not found');
  }
  todo.title = title || todo.title;
  todo.completed = completed !== undefined ? completed : todo.completed;
  res.status(200).json(todo);
});

app.delete('/todo/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(t => t.id === parseInt(id));
  if (index === -1) {
    return res.status(404).send('Todo not found');
  }
  todos.splice(index, 1);
  res.status(204).send();
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});