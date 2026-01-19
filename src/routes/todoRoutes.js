const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.getAllTodos);
router.get('/:title', todoController.getTodo);
router.post('/', todoController.createTodo);
router.put('/:title', todoController.updateTodo);
router.delete('/:title', todoController.deleteTodo);

module.exports = router;