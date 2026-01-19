const Todo = require('../models/todo');
const todos = require('../data/todos.json');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'todos.json');

function saveTodos() {
    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
}

exports.getAllTodos = (req, res) => {
    res.json(todos);
};

exports.getTodo = (req, res) => {
    const todo = todos.find(t => t.title === req.params.title);
    if (!todo) {
        return res.status(404).send('Todo not found');
    }
    res.json(todo);
};

exports.createTodo = (req, res) => {
    const { title, description, completed } = req.body;
    if (!title) {
        return res.status(400).send('Title is required');
    }
    const newTodo = new Todo(title, description, completed);
    todos.push(newTodo);
    saveTodos();
    res.status(201).send(newTodo);
};

exports.updateTodo = (req, res) => {
    const { title, description, completed } = req.body;
    const todoIndex = todos.findIndex(t => t.title === req.params.title);
    if (todoIndex === -1) {
        return res.status(404).send('Todo not found');
    }
    const updatedTodo = { ...todos[todoIndex], title, description, completed };
    todos[todoIndex] = updatedTodo;
    saveTodos();
    res.json(updatedTodo);
};

exports.deleteTodo = (req, res) => {
    const todoIndex = todos.findIndex(t => t.title === req.params.title);
    if (todoIndex === -1) {
        return res.status(404).send('Todo not found');
    }
    todos.splice(todoIndex, 1);
    saveTodos();
    res.status(204).send();
};